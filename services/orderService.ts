import { prisma } from "@/lib/prisma";
import { Order, OrderItem, Account } from "@/types";

// Helper format: Lọc account theo đúng ProductID và OptionID
const formatDeliveredAccounts = (items: OrderItem[], accounts: Account[]) => {
    return items.map(item => {
        // LỌC: Account phải khớp ProductID VÀ OptionID
        // (Hoặc nếu account đã gán orderItemId rồi thì filter theo orderItemId cũng được)
        const myAccounts = accounts.filter(acc =>
            acc.product_id === item.product_id &&
            acc.option_id === item.option_id &&
            acc.order_item_id === item.id // Chỉ lấy acc thuộc dòng item này
        );

        const credentials = myAccounts.map(acc => ({
            username: acc.username,
            password: acc.password
        }));

        // Check thiếu hàng
        let needed = item.quantity - credentials.length;
        while (needed > 0) {
            credentials.push({ username: "LIÊN_HỆ_SUPPORT", password: "HẾT_KHO_TẠM_THỜI" });
            needed--;
        }

        return {
            productId: item.product_id,
            productName: item.productName,
            optionName: item.optionName, // Trả về tên gói
            accounts: credentials
        };
    });
};

// --- Order APIs ---

// 1. Tạo đơn hàng mới
// Input items cần thêm optionId và optionName
export const apiCreateOrder = async (
    items: {
        productId: string;
        productName: string;
        optionId: string;
        optionName: string;
        quantity: number;
        price: number
    }[],
    email: string,
    totalAmount: number,
    orderCode: number
) => {
    const newOrder = await prisma.order.create({
        data: {
            order_code: orderCode,
            user_email: email,
            total_amount: totalAmount,
            status: 'PENDING',
            order_item: {
                create: items.map(item => ({
                    product_id: item.productId,
                    productName: item.productName,
                    option_id: String(item.optionId),
                    optionName: item.optionName,
                    quantity: item.quantity,
                    price: item.price
                }))
            }
        },
        include: {
            order_item: true
        }
    });

    return newOrder;
};

// 2. Xử lý thanh toán & Trả hàng
export const apiProcessPaymentAndGetAccounts = async (orderCode: number) => {
    return await prisma.$transaction(async (tx) => {
        // a. Tìm đơn hàng (Include sâu để lấy account nếu đã paid)
        const order = await tx.order.findUnique({
            where: { order_code: orderCode },
            include: {
                order_item: {
                    include: { account: true } // Lấy luôn accounts đã gán vào item
                }
            }
        });

        if (!order) throw new Error("Order not found");

        // Nếu đã thanh toán, trả về dữ liệu lịch sử
        if (order.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID) {
            // Gom tất cả account từ các items lại thành 1 mảng phẳng để đưa vào hàm format
            const allSoldAccounts = order.order_item.flatMap(item => item.account || []);
            return { order, accounts: formatDeliveredAccounts(order.order_item, allSoldAccounts) };
        }

        // b. Logic lấy Account từ kho
        let newlyAllocatedAccounts: Account[] = [];

        for (const item of order.order_item) {
            // Tìm account khớp Product + Option + Chưa bán
            const availableAccounts = await tx.account.findMany({
                where: {
                    product_id: item.product_id,
                    option_id: item.option_id, // QUAN TRỌNG: Phải đúng gói
                    is_sold: false
                },
                take: item.quantity,
                orderBy: { created_at: 'asc' }
            });

            // Cập nhật: Gán Account vào OrderItem (thay vì Order)
            const accountIds = availableAccounts.map(acc => acc.id);
            if (accountIds.length > 0) {
                await tx.account.updateMany({
                    where: { id: { in: accountIds } },
                    data: {
                        is_sold: true,
                        sold_at: new Date(),
                        order_item_id: item.id // <--- MỚI: Liên kết với OrderItem ID
                    }
                });
            }

            // Vì updateMany không trả về data mới, ta map thủ công orderItemId vào để trả về Client hiển thị ngay
            const updatedAccounts = availableAccounts.map(acc => ({
                ...acc,
                orderItemId: item.id
            }));

            newlyAllocatedAccounts = [...newlyAllocatedAccounts, ...updatedAccounts];
        }

        // c. Cập nhật trạng thái đơn hàng
        const updatedOrder = await tx.order.update({
            where: { id: order.id },
            data: { status: process.env.NEXT_PUBLIC_STATUS_ODR_PAID }
        });

        // d. Format dữ liệu
        const finalResult = formatDeliveredAccounts(order.order_item, newlyAllocatedAccounts);

        return { order: updatedOrder, accounts: finalResult };
    });
};

// --- Admin APIs ---

// 3. Lấy thống kê
export const apiAdminGetStats = async () => {
    const [revenue, totalOrders, soldStock, availableStock] = await Promise.all([
        prisma.order.aggregate({
            _sum: { total_amount: true },
            where: { status: process.env.NEXT_PUBLIC_STATUS_ODR_PAID }
        }),
        prisma.order.count(),
        prisma.account.count({ where: { is_sold: true } }),
        prisma.account.count({ where: { is_sold: false } })
    ]);

    return {
        totalRevenue: revenue._sum.total_amount || 0,
        totalOrders,
        soldStock,
        availableStock
    };
};

// 4. Lấy danh sách đơn hàng
export const apiAdminGetOrders = async () => {
    return await prisma.order.findMany({
        orderBy: { created_at: 'desc' },
        include: { order_item: true }
    });
};

// 5. Lấy danh sách kho
export const apiAdminGetStock = async () => {
    return await prisma.account.findMany({
        orderBy: { created_at: 'desc' }
    });
};

// 6. Thêm stock mới (Cần thêm tham số optionId)
export const apiAdminAddStock = async (
    productId: string,
    optionId: string, // MỚI
    username: string,
    password: string
) => {
    return await prisma.account.create({
        data: {
            product_id: productId,
            option_id: optionId,
            username: username,
            password: password,
            is_sold: false
        }
    });
};