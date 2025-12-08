'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Order, ProductOption, Category, Account, LogEntry, Product, Feature, Guides, HeroSlide } from '@/types';
import { Search, Image as ImageIcon, Layers, Edit, Tag, CheckCircle2, List, BookOpen, Youtube, Trash2, LayoutDashboard, Package, ShoppingCart, Terminal, Plus, RefreshCw, LogOut, User, Menu, X, Eye, PlayCircle, Calendar, Mail, CreditCard, Save, XCircle, Key, ChevronLeft, ChevronRight } from 'lucide-react';
import * as XLSX from 'xlsx';
import { FileSpreadsheet } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'categories' | 'slides' | 'orders' | 'account' | 'logs'>('overview');

    // --- STATE DỮ LIỆU ---
    const [stats, setStats] = useState<any>(null);
    const [orders, setOrders] = useState<Order[]>([]);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [slides, setSlides] = useState<HeroSlide[]>([]);

    const [loading, setLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // --- STATE FORM NHẬP KHO ---
    const [newAccountProduct, setNewAccountProduct] = useState('');
    const [newAccountOption, setNewAccountOption] = useState('');
    const [newAccountUser, setNewAccountUser] = useState('');
    const [newAccountPass, setNewAccountPass] = useState('');

    // --- STATE EDIT ORDER ---
    const [editingOrder, setEditingOrder] = useState<Order | null>(null);
    const [editStatus, setEditStatus] = useState('');
    const [editEmail, setEditEmail] = useState('');

    // *** NEW: STATE VIEW ORDER DETAIL ***
    const [viewingOrder, setViewingOrder] = useState<Order | null>(null);
    // State quản lý việc sửa item trong đơn hàng (index của item đang sửa)
    const [editingOrderItemIndex, setEditingOrderItemIndex] = useState<number | null>(null);
    const [tempOrderItem, setTempOrderItem] = useState<any>(null);
    // State quản lý việc sửa account trong đơn hàng
    const [editingLinkedAccountId, setEditingLinkedAccountId] = useState<number | null>(null);
    const [tempLinkedAccount, setTempLinkedAccount] = useState<any>(null);


    // --- STATE EDIT ACCOUNT ---
    const [editingAccount, setEditingAccount] = useState<Account | null>(null);
    const [editAccUser, setEditAccUser] = useState('');
    const [editAccPass, setEditAccPass] = useState('');
    const [editAccSold, setEditAccSold] = useState(false);

    // --- STATE PAGINATION & SEARCH ---
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // --- STATE PRODUCT MANAGER ---
    const [prodOptions, setProdOptions] = useState<ProductOption[]>([]);
    const [prodFeatures, setProdFeatures] = useState<Feature[]>([]);
    const [prodGuides, setProdGuides] = useState<Guides[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);

    // --- STATE VIEW PRODUCT DETAIL ---
    const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

    // Form Product Data
    const [prodId, setProdId] = useState('');
    const [prodName, setProdName] = useState('');
    const [prodPrice, setProdPrice] = useState(0);
    const [prodOriginalPrice, setProdOriginalPrice] = useState(0);
    const [prodCategory, setProdCategory] = useState('');
    const [prodThumbnail, setProdThumbnail] = useState('');
    const [prodDesc, setProdDesc] = useState('');
    const [prodYoutubeId, setProdYoutubeId] = useState('');

    // --- STATE HERO SLIDES ---
    const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null);
    const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);
    const [slideTag, setSlideTag] = useState('');
    const [slideTitle, setSlideTitle] = useState('');
    const [slideHighlight, setSlideHighlight] = useState('');
    const [slideGradient, setSlideGradient] = useState('');
    const [slideDesc, setSlideDesc] = useState('');
    const [slideBg, setSlideBg] = useState('');

    // --- STATE CATEGORY MANAGER ---
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [catNameForm, setCatNameForm] = useState('');

    // 1. CHECK AUTH
    useEffect(() => {
        const verifyUser = async () => {
            try {
                const res = await fetch('/api/admin/me', { cache: 'no-store' });
                if (!res.ok) {
                    router.push('/adminlogin');
                    return;
                }
                fetchData();
            } catch (error) {
                router.push('/adminlogin');
            }
        };
        verifyUser();
    }, [router]);

    // 2. RESET TRANG KHI ĐỔI TAB
    useEffect(() => {
        setPage(1);
        setSearchQuery('');
    }, [activeTab]);

    // 3. FETCH DATA (DEBOUNCE & AUTO RELOAD)
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery, page, activeTab]);

    // 4. TỰ ĐỘNG CHỌN OPTION KHI NHẬP KHO
    useEffect(() => {
        if (products.length > 0) {
            const currentProduct = products.find(p => p.id === newAccountProduct);
            if (currentProduct && currentProduct.product_options && currentProduct.product_options.length > 0) {
                setNewAccountOption(String(currentProduct.product_options[0].id));
            } else if (products[0] && !newAccountProduct) {
                setNewAccountProduct(products[0].id);
            }
        }
    }, [newAccountProduct, products]);

    // --- MAIN FETCH FUNCTION ---
    const fetchData = async () => {
        try {
            setLoading(true);

            if (activeTab === 'orders') {
                // CẬP NHẬT: Load thêm Accounts và Products để phục vụ modal chi tiết đơn hàng
                const [orderRes, accRes, prodRes] = await Promise.all([
                    fetch(`/api/orders?page=${page}&q=${searchQuery}`, { cache: 'no-store' }),
                    fetch('/api/accounts?limit=100', { cache: 'no-store' }), // Load danh sách account (giả định lấy nhiều để map)
                    fetch('/api/products?limit=100', { cache: 'no-store' })  // Load sản phẩm để map tên
                ]);

                const orderJson = await orderRes.json();
                const accJson = await accRes.json();
                const prodJson = await prodRes.json();

                setOrders(orderJson.data || (Array.isArray(orderJson) ? orderJson : []));
                setTotalPages(orderJson.pagination?.totalPages || 1);

                // Lưu dữ liệu phụ trợ vào state
                setAccounts(accJson.data || (Array.isArray(accJson) ? accJson : []));

                const pList = Array.isArray(prodJson) ? prodJson : (prodJson.data || []);
                setProducts(pList);
            }
            else if (activeTab === 'account') {
                const [accRes, prodRes] = await Promise.all([
                    fetch(`/api/accounts?page=${page}&q=${searchQuery}`, { cache: 'no-store' }),
                    fetch('/api/products', { cache: 'no-store' })
                ]);
                const accJson = await accRes.json();
                const prodJson = await prodRes.json();

                setAccounts(accJson.data || (Array.isArray(accJson) ? accJson : []));
                setTotalPages(accJson.pagination?.totalPages || 1);

                const pList = Array.isArray(prodJson) ? prodJson : (prodJson.data || []);
                setProducts(pList);

                if (pList.length > 0 && !newAccountProduct) {
                    setNewAccountProduct(pList[0].id);
                    if (pList[0].product_options?.length > 0) {
                        setNewAccountOption(String(pList[0].product_options[0].id));
                    }
                }
            }
            else if (activeTab === 'products') {
                const [prodRes, catRes] = await Promise.all([
                    fetch(`/api/products?page=${page}&q=${searchQuery}`, { cache: 'no-store' }),
                    fetch('/api/categories', { cache: 'no-store' })
                ]);
                const prodJson = await prodRes.json();
                const catJson = await catRes.json();

                if (prodJson.data && Array.isArray(prodJson.data)) {
                    setProducts(prodJson.data);
                    setTotalPages(prodJson.pagination?.totalPages || 1);
                } else {
                    setProducts(Array.isArray(prodJson) ? prodJson : []);
                    setTotalPages(1);
                }
                setCategories(Array.isArray(catJson) ? catJson : []);
                if (Array.isArray(catJson) && catJson.length > 0 && !prodCategory) {
                    setProdCategory(catJson[0].category_name || '');
                }
            }
            else if (activeTab === 'categories') {
                const res = await fetch(`/api/categories?page=${page}&q=${searchQuery}`, { cache: 'no-store' });
                const json = await res.json();
                if (json.data && Array.isArray(json.data)) {
                    setCategories(json.data);
                    setTotalPages(json.pagination?.totalPages || 1);
                } else {
                    setCategories(Array.isArray(json) ? json : []);
                    setTotalPages(1);
                }
            }
            else if (activeTab === 'slides') {
                const res = await fetch('/api/hero-slides', { cache: 'no-store' });
                const json = await res.json();
                setSlides(Array.isArray(json) ? json : []);
            }
            else if (activeTab === 'overview') {
                const [statsRes, productsRes] = await Promise.all([
                    fetch('/api/admin/stats', { cache: 'no-store' }),
                    fetch('/api/products', { cache: 'no-store' })
                ]);
                setStats(await statsRes.json());
                const pData = await productsRes.json();
                setProducts(Array.isArray(pData) ? pData : (pData.data || []));
            }

        } catch (error) {
            console.error("Fetch Error:", error);
            setOrders([]);
            setAccounts([]);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    // --- HANDLERS ---
    const handleAddAccount = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newAccountProduct || !newAccountOption || !newAccountUser || !newAccountPass) {
            alert("Vui lòng nhập đủ thông tin");
            return;
        }
        try {
            const res = await fetch('/api/accounts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product_id: newAccountProduct,
                    option_id: newAccountOption,
                    username: newAccountUser,
                    password: newAccountPass
                })
            });
            if (!res.ok) throw new Error("Lỗi thêm kho");
            setNewAccountUser('');
            setNewAccountPass('');
            alert('✅ Đã thêm kho thành công!');
            fetchData();
        } catch (error) {
            alert('❌ Lỗi thêm kho');
        }
    };

    const handleLogout = async () => {
        try {
            await fetch('/api/admin/logout', { method: 'POST' });
            router.push('/adminlogin');
        } catch (error) {
            router.push('/adminlogin');
        }
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const getProductDetails = (pId: string, oId: string) => {
        const prod = products.find(p => p.id === pId);
        const opt = prod?.product_options?.find(o => String(o.id) === String(oId));
        return {
            prodName: prod?.name || pId,
            optName: opt?.name || oId
        };
    };

    const handleDeleteOrder = async (orderId: string) => {
        if (!confirm("Bạn có chắc chắn muốn xóa đơn hàng này không?")) return;
        try {
            const res = await fetch(`/api/orders?id=${orderId}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Lỗi xóa đơn");
            alert("Đã xóa đơn hàng thành công!");
            fetchData();
        } catch (error) {
            alert("Không thể xóa đơn hàng này.");
        }
    };

    const openEditModal = (order: Order) => {
        setEditingOrder(order);
        setEditStatus(order.status);
        setEditEmail(order.user_email || '');
    };

    const handleUpdateOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingOrder) return;
        try {
            const res = await fetch('/api/orders', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingOrder.id,
                    status: editStatus,
                    user_email: editEmail
                })
            });
            if (!res.ok) throw new Error("Lỗi cập nhật");
            alert("Cập nhật thành công!");
            setEditingOrder(null);
            fetchData();
        } catch (error) {
            alert("Lỗi cập nhật đơn hàng.");
        }
    };

    const handleDeleteAccount = async (id: number) => {
        if (!confirm("Bạn chắc chắn muốn xóa tài khoản này?")) return;
        try {
            const res = await fetch(`/api/accounts?id=${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Lỗi xóa");
            alert("Đã xóa thành công!");
            fetchData();
        } catch (error) {
            alert("Lỗi khi xóa tài khoản.");
        }
    };

    const openEditAccountModal = (acc: Account) => {
        setEditingAccount(acc);
        setEditAccUser(acc.username);
        setEditAccPass(acc.password);
        setEditAccSold(acc.is_sold);
    };

    const handleUpdateAccount = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingAccount) return;
        try {
            const res = await fetch('/api/accounts', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingAccount.id,
                    username: editAccUser,
                    password: editAccPass,
                    is_sold: editAccSold
                })
            });
            if (!res.ok) throw new Error("Lỗi update");
            alert("Cập nhật thành công!");
            setEditingAccount(null);
            fetchData();
        } catch (error) {
            alert("Lỗi cập nhật tài khoản.");
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (evt) => {
            try {
                const bstr = evt.target?.result;
                const wb = XLSX.read(bstr, { type: 'binary' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data: any[] = XLSX.utils.sheet_to_json(ws);

                if (data.length === 0) return alert("File Excel rỗng!");

                const importData = data.map(row => {
                    const pId = row.product_id || row.productId || row.ProductID || newAccountProduct;
                    const oId = row.option_id || row.optionId || row.OptionID || newAccountOption;
                    const rawUser = row.username || row.Username || row.User;
                    const rawPass = row.password || row.Password || row.Pass;
                    return {
                        productId: pId ? String(pId).trim() : null,
                        optionId: oId ? String(oId).trim() : null,
                        username: rawUser ? String(rawUser).trim() : null,
                        password: rawPass ? String(rawPass).trim() : null
                    };
                });

                const validData = importData.filter(item => item.productId && item.optionId && item.username && item.password);
                if (validData.length === 0) return alert("Không tìm thấy dữ liệu hợp lệ!");

                if (!confirm(`Tìm thấy ${validData.length} tài khoản. Import?`)) return;

                const res = await fetch('/api/accounts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(validData)
                });
                if (!res.ok) throw new Error("Lỗi Import");
                alert(`✅ Import thành công!`);
                fetchData();
            } catch (error) {
                alert("Lỗi khi đọc file hoặc import.");
            } finally {
                e.target.value = '';
            }
        };
        reader.readAsBinaryString(file);
    };

    const openProductModal = (prod: Product | null) => {
        if (prod) {
            setEditingProduct(prod);
            setProdId(prod.id);
            setProdName(prod.name);
            setProdPrice(prod.price);
            setProdOriginalPrice(prod.original_price || 0);
            setProdCategory(prod.category);
            setProdThumbnail(prod.thumbnail);
            setProdDesc(prod.description);
            setProdYoutubeId(prod.youtube_video_id || '');

            if (prod.product_options) {
                setProdOptions(prod.product_options.map(o => ({
                    id: o.id,
                    name: o.name,
                    price: o.price,
                    original_price: o.original_price || 0
                })));
            } else setProdOptions([]);

            if (prod.product_features) {
                setProdFeatures(prod.product_features.map(f => ({
                    id: String(f.id),
                    product_id: String(f.product_id),
                    feature: f.feature
                })));
            } else setProdFeatures([]);

            if (prod.product_guides) {
                setProdGuides(prod.product_guides.map(g => ({
                    id: String(g.id),
                    product_id: String(g.product_id),
                    step_order: String(g.step_order),
                    step_text: g.step_text
                })));
            } else setProdGuides([]);
        } else {
            setEditingProduct(null);
            setProdId('');
            setProdName('');
            setProdPrice(0);
            setProdOriginalPrice(0);
            if (categories.length > 0) {
                setProdCategory(categories[0].category_name || '');
            } else {
                setProdCategory('');
            }
            setProdThumbnail('');
            setProdDesc('');
            setProdYoutubeId('');
            setProdOptions([]);
            setProdFeatures([]);
            setProdGuides([]);
        }
        setIsProductModalOpen(true);
    };

    const handleSaveProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            id: prodId,
            name: prodName,
            price: !prodPrice ? 0 : Number(prodPrice),
            original_price: !prodOriginalPrice ? 0 : Number(prodOriginalPrice),
            category: prodCategory,
            thumbnail: prodThumbnail,
            description: prodDesc,
            long_description: prodDesc,
            youtube_video_id: prodYoutubeId,
            options: prodOptions.map(o => ({
                id: o.id,
                name: o.name,
                price: !o.price ? 0 : Number(o.price),
                original_price: !o.original_price ? 0 : Number(o.original_price)
            })),
            product_features: prodFeatures.map(f => f.feature).filter(t => t.trim() !== ''),
            product_guides: prodGuides.map(g => g.step_text).filter(t => t.trim() !== '')
        };

        try {
            const method = editingProduct ? 'PUT' : 'POST';
            const res = await fetch('/api/products', {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error("Lỗi lưu sản phẩm");
            alert("Thành công!");
            setIsProductModalOpen(false);
            fetchData();
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleDeleteProduct = async (id: string) => {
        if (!confirm("Xóa sản phẩm này?")) return;
        try {
            const res = await fetch(`/api/products?id=${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Lỗi xóa");
            alert("Đã xóa!");
            fetchData();
        } catch (error) {
            alert("Lỗi xóa sản phẩm.");
        }
    };

    const openSlideModal = (slide: HeroSlide | null) => {
        if (slide) {
            setEditingSlide(slide);
            setSlideTag(slide.tag || '');
            setSlideTitle(slide.title || '');
            setSlideHighlight(slide.highlight || '');
            setSlideGradient(slide.gradient || '');
            setSlideDesc(slide.description || '');
            setSlideBg(slide.bg_image || '');
        } else {
            setEditingSlide(null);
            setSlideTag('');
            setSlideTitle('');
            setSlideHighlight('');
            setSlideGradient('');
            setSlideDesc('');
            setSlideBg('');
        }
        setIsSlideModalOpen(true);
    };

    const handleSaveSlide = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            id: editingSlide?.id,
            tag: slideTag,
            title: slideTitle,
            highlight: slideHighlight,
            description: slideDesc,
            bg_image: slideBg,
            gradient: slideGradient,
            btn_color: "bg-indigo-600"
        };
        try {
            const method = editingSlide ? 'PUT' : 'POST';
            const res = await fetch('/api/hero-slides', {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error("Lỗi lưu slide");
            alert("Thành công!");
            setIsSlideModalOpen(false);
            fetchData();
        } catch (err) {
            alert("Lỗi lưu dữ liệu");
        }
    };

    const handleDeleteSlide = async (id: number) => {
        if (!confirm("Xóa slide này?")) return;
        await fetch(`/api/hero-slides?id=${id}`, { method: 'DELETE' });
        fetchData();
    };

    const openCategoryModal = (cat: Category | null) => {
        if (cat) {
            setEditingCategory(cat);
            setCatNameForm(cat.category_name || '');
        } else {
            setEditingCategory(null);
            setCatNameForm('');
        }
        setIsCategoryModalOpen(true);
    };

    const handleSaveCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!catNameForm.trim()) return alert("Tên không được để trống");
        try {
            const method = editingCategory ? 'PUT' : 'POST';
            const body = editingCategory
                ? { id: editingCategory.id, category_name: catNameForm }
                : { category_name: catNameForm };
            const res = await fetch('/api/categories', {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) throw new Error("Lỗi lưu");
            alert("Thành công!");
            setIsCategoryModalOpen(false);
            fetchData();
        } catch (error) {
            alert("Có lỗi xảy ra.");
        }
    };

    const handleDeleteCategory = async (id: number) => {
        if (!confirm("Xóa danh mục này?")) return;
        try {
            await fetch(`/api/categories?id=${id}`, { method: 'DELETE' });
            alert("Đã xóa!");
            fetchData();
        } catch (error) {
            alert("Không thể xóa.");
        }
    };

    // --- HELPER UPDATE ORDER ITEMS / LINKED ACCOUNTS ---
    // Mock update: Trong thực tế bạn cần API riêng
    // const handleSaveOrderItem = async () => {
    //     if (!viewingOrder || editingOrderItemIndex === null) return;
    //     // Mock update local state for UI demo
    //     const updatedItems = [...(viewingOrder.order_item || [])];
    //     updatedItems[editingOrderItemIndex] = tempOrderItem;
    //     const newOrder = { ...viewingOrder, order_item: updatedItems };
    //     setViewingOrder(newOrder);
    //     setEditingOrderItemIndex(null);
    //     // TODO: Call API to save order items
    //     alert("Đã cập nhật thông tin sản phẩm trong đơn hàng (Demo UI)");
    // };

    // const handleDeleteOrderItem = async (idx: number) => {
    //     if (!viewingOrder || !confirm("Xóa sản phẩm này khỏi đơn hàng?")) return;
    //     const updatedItems = viewingOrder.order_item?.filter((_, i) => i !== idx);
    //     const newOrder = { ...viewingOrder, order_item: updatedItems };
    //     setViewingOrder(newOrder);
    //     // TODO: Call API
    // };

    const handleSaveLinkedAccount = async () => {
        if (!tempLinkedAccount) return;
        // Call existing account update API
        try {
            const res = await fetch('/api/accounts', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: tempLinkedAccount.id,
                    username: tempLinkedAccount.username,
                    password: tempLinkedAccount.password,
                    is_sold: tempLinkedAccount.is_sold
                })
            });
            if (!res.ok) throw new Error("Failed");
            // Update local state in view
            // Refresh main data
            fetchData();
            setEditingLinkedAccountId(null);
            alert("Đã cập nhật thông tin tài khoản bàn giao!");
        } catch (e) {
            alert("Lỗi cập nhật tài khoản");
        }
    };

    const handleUnlinkAccount = async (accId: number) => {
        if (!confirm("Gỡ bỏ tài khoản này khỏi đơn hàng? (Chuyển về trạng thái chưa bán)")) return;
        try {
            const res = await fetch('/api/accounts', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: accId,
                    is_sold: false // Mark as unsold
                    // order_id: null // In real backend, clear order_id
                })
            });
            if (!res.ok) throw new Error("Failed");
            fetchData();
            alert("Đã gỡ tài khoản khỏi đơn hàng!");
        } catch (e) {
            alert("Lỗi xử lý");
        }
    }

    // --- LOGIC HIỂN THỊ TÀI KHOẢN ĐÃ GẮN (FIXED) ---
    // 1. Trích xuất tài khoản trực tiếp từ order_item của đơn hàng đang xem (Ưu tiên số 1)
    //    Giả sử backend trả về cấu trúc: Order -> OrderItem -> Account (nested object hoặc array)
    const accountsFromOrder = viewingOrder?.order_item?.flatMap((item: any) => {
        if (Array.isArray(item.account)) return item.account; // Nếu backend trả về mảng account
        if (item.account) return [item.account]; // Nếu backend trả về object account đơn lẻ
        return [];
    }) || [];

    // 2. Logic fallback (Nếu cách 1 không có dữ liệu, dùng logic cũ lọc từ danh sách accounts global)
    //    Chỉ dùng khi accountsFromOrder rỗng
    const orderItemIds = viewingOrder?.order_item?.map((i: any) => i.id) || [];
    const accountsFromGlobal = accounts.filter(acc =>
        acc.is_sold &&
        (acc as any).order_item_id &&
        orderItemIds.includes((acc as any).order_item_id)
    );

    // 3. Quyết định danh sách hiển thị
    const displayAccounts = accountsFromOrder.length > 0 ? accountsFromOrder : accountsFromGlobal;

    const menuItems = [
        { id: 'overview', icon: LayoutDashboard, label: 'Tổng quan' },
        { id: 'products', icon: Tag, label: 'Sản phẩm' },
        { id: 'categories', icon: Layers, label: 'Danh mục' },
        { id: 'slides', icon: ImageIcon, label: 'Quản lý Banner' },
        { id: 'orders', icon: ShoppingCart, label: 'Đơn hàng' },
        { id: 'account', icon: Package, label: 'Kho tài khoản' },
        { id: 'logs', icon: Terminal, label: 'System Logs' },
    ];

    if (loading && !stats) {
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col gap-4"><RefreshCw className="w-10 h-10 text-indigo-600 animate-spin" /><div className="text-indigo-600 font-bold">Đang tải dữ liệu quản trị...</div></div>;
    }

    const currentUser = "Admin";

    return (
        <div className="min-h-screen bg-gray-100 flex font-sans">
            {/* SIDEBAR */}
            <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-indigo-900 text-indigo-100 flex flex-col h-full shadow-xl transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 border-b border-indigo-800 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2"><div className="bg-indigo-500 p-1.5 rounded-lg"><User className="w-5 h-5 text-white" /></div> Quản Trị</h2>
                        <p className="text-xs text-indigo-400 mt-2">Hi, <span className="text-white font-bold">{currentUser}</span></p>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-indigo-300 hover:text-white"><X className="w-6 h-6" /></button>
                </div>
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <button key={item.id} onClick={() => { setActiveTab(item.id as any); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id ? 'bg-indigo-700 text-white shadow-lg' : 'hover:bg-indigo-800'}`}><item.icon className="w-5 h-5" /> {item.label}</button>
                    ))}
                </nav>
                <div className="p-4 border-t border-indigo-800">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/20 hover:text-red-400 transition-colors text-indigo-200 mb-2"><LogOut className="w-5 h-5" /> Đăng xuất</button>
                    <Link href="/" className="w-full flex items-center justify-center text-xs text-indigo-400 hover:text-white mt-2">&larr; Về trang cửa hàng</Link>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-4 md:p-8 overflow-auto h-screen md:ml-64 bg-gray-100">
                <div className="flex justify-between items-center mb-6 md:mb-8 sticky top-0 bg-gray-100 z-20 py-2">
                    <div className="flex items-center gap-3">
                        <button onClick={toggleSidebar} className="md:hidden p-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 active:bg-gray-100"><Menu className="w-6 h-6" /></button>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800 capitalize truncate">{activeTab}</h1>
                    </div>
                    <button onClick={fetchData} className="p-2 bg-white rounded-full shadow hover:bg-gray-50 text-gray-600 transition-transform hover:rotate-180 duration-500"><RefreshCw className="w-5 h-5" /></button>
                </div>

                {/* 1. OVERVIEW TAB */}
                {activeTab === 'overview' && stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-in fade-in duration-500">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"><p className="text-sm text-gray-500 uppercase font-bold">Doanh thu</p><p className="text-3xl font-bold text-green-600 mt-2">{new Intl.NumberFormat('vi-VN').format(stats.totalRevenue || 0)} đ</p></div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"><p className="text-sm text-gray-500 uppercase font-bold">Tổng đơn</p><p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalOrders || 0}</p></div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"><p className="text-sm text-gray-500 uppercase font-bold">Đã bán</p><p className="text-3xl font-bold text-indigo-600 mt-2">{stats.soldStock || 0}</p></div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"><p className="text-sm text-gray-500 uppercase font-bold">Tồn kho</p><p className="text-3xl font-bold text-orange-600 mt-2">{stats.availableStock || 0}</p></div>
                    </div>
                )}

                {/* SEARCH BAR */}
                {activeTab !== 'overview' && activeTab !== 'slides' && activeTab !== 'logs' && (
                    <div className="mb-6 flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="relative flex-1">
                            <input type="text" placeholder={activeTab === 'orders' ? "🔍 Tìm mã đơn, email..." : "🔍 Tìm..."} value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900" />
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                        </div>
                    </div>
                )}

                {/* 2. ORDERS TAB */}
                {activeTab === 'orders' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[800px]">
                                <thead className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase font-bold">
                                    <tr><th className="p-4">Mã Đơn</th><th className="p-4">Khách Hàng</th><th className="p-4">Chi tiết</th><th className="p-4">Trạng Thái</th><th className="p-4 text-right">Giá Trị</th><th className="p-4 text-right">Thời Gian</th><th className="p-4 text-center">Thao tác</th></tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {Array.isArray(orders) && orders.map(order => (
                                        <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-xs font-mono font-bold text-indigo-600">{order.order_code}</td>
                                            <td className="p-4 text-sm text-gray-700">{order.user_email}</td>
                                            <td className="p-4 text-sm font-medium text-gray-800">
                                                {order.order_item?.map((i: any, idx: number) => (
                                                    <div key={idx} className="mb-1"><span className="text-indigo-600 font-bold">{i.productName}</span> <span className="text-gray-500 text-xs ml-1">({i.optionName})</span> <span className="bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded ml-2">x{i.quantity}</span></div>
                                                ))}
                                            </td>
                                            <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${order.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{order.status}</span></td>
                                            <td className="p-4 text-sm font-bold text-gray-900 text-right">{order.total_amount?.toLocaleString()} đ</td>
                                            <td className="p-4 text-xs text-gray-500 text-right">{new Date(order.created_at || '').toLocaleString('vi-VN')}</td>
                                            <td className="p-4 text-center">
                                                <div className="flex justify-center gap-2">
                                                    {/* NEW: View Order Detail Button */}
                                                    <button onClick={() => setViewingOrder(order)} className="p-1.5 bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100" title="Xem chi tiết đơn"><Eye className="w-4 h-4" /></button>
                                                    <button onClick={() => openEditModal(order)} className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"><Edit className="w-4 h-4" /></button>
                                                    <button onClick={() => handleDeleteOrder(order.id)} className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center mt-4 px-4 p-4 border-t border-gray-50 bg-gray-50/50">
                            <span className="text-sm text-gray-500 font-medium">Trang {page} / {totalPages}</span>
                            <div className="flex gap-3">
                                <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                    <ChevronLeft className="w-4 h-4" /> Trước
                                </button>
                                <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                    Sau <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. ACCOUNT TAB */}
                {activeTab === 'account' && (
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold mb-4 flex items-center gap-2 text-gray-800"><Plus className="w-5 h-5 text-indigo-600" /> Nhập kho tài khoản thủ công</h3>
                            <form onSubmit={handleAddAccount} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                                <div><label className="text-xs text-gray-500 font-bold uppercase block mb-1.5">Sản phẩm</label><select value={newAccountProduct} onChange={e => setNewAccountProduct(e.target.value)} className="text-gray-900 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500">{products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
                                <div><label className="text-xs text-gray-500 font-bold uppercase block mb-1.5">Loại gói</label><select value={newAccountOption} onChange={e => setNewAccountOption(e.target.value)} className="text-gray-900 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500">{products.find(p => p.id === newAccountProduct)?.product_options?.map(opt => (<option key={opt.id} value={opt.id}>{opt.name}</option>))}</select></div>
                                <div><label className="text-xs text-gray-500 font-bold uppercase block mb-1.5">Tài khoản</label><input type="text" required value={newAccountUser} onChange={e => setNewAccountUser(e.target.value)} className="text-gray-900 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="user@email.com" /></div>
                                <div><label className="text-xs text-gray-500 font-bold uppercase block mb-1.5">Mật khẩu</label><input type="text" required value={newAccountPass} onChange={e => setNewAccountPass(e.target.value)} className="text-gray-900 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="******" /></div>
                                <div className="md:col-span-4 flex justify-end gap-3">
                                    <label className="cursor-pointer bg-green-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-green-700 transition-all flex items-center gap-2 shadow-lg shadow-green-200"><FileSpreadsheet className="w-4 h-4" /> Import Excel <input type="file" accept=".xlsx, .xls" className="hidden" onChange={handleFileUpload} /></label>
                                    <button type="submit" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-200"><Plus className="w-4 h-4" /> Thêm thủ công</button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left min-w-[600px]">
                                    <thead className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase font-bold">
                                        <tr><th className="p-4">Sản Phẩm</th><th className="p-4">Gói</th><th className="p-4">Tài khoản</th><th className="p-4">Mật khẩu</th><th className="p-4">Trạng thái</th><th className="p-4 text-center">Thao tác</th></tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {Array.isArray(accounts) && accounts.map(item => {
                                            const details = getProductDetails(item.product_id, item.option_id);
                                            return (
                                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="p-4 text-sm font-bold text-indigo-700">{details.prodName}</td>
                                                    <td className="p-4 text-sm font-medium text-gray-600"><span className="bg-gray-100 px-2 py-1 rounded text-xs">{details.optName}</span></td>
                                                    <td className="p-4 text-sm text-gray-800 font-mono">{item.username}</td>
                                                    <td className="p-4 text-sm text-gray-400 font-mono">{item.is_sold ? '******' : item.password}</td>
                                                    <td className="p-4"><span className={`px-2 py-1 rounded text-xs font-bold ${item.is_sold ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>{item.is_sold ? 'ĐÃ BÁN' : 'SẴN SÀNG'}</span></td>
                                                    <td className="p-4 text-center"><div className="flex justify-center gap-2"><button onClick={() => openEditAccountModal(item)} className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"><Edit className="w-4 h-4" /></button><button onClick={() => handleDeleteAccount(item.id)} className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100"><Trash2 className="w-4 h-4" /></button></div></td>
                                                </tr>
                                            );
                                        })}
                                        {accounts.length === 0 && <tr><td colSpan={6} className="p-6 text-center text-gray-500">Chưa có tài khoản nào.</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-between items-center mt-4 px-4 p-4 border-t border-gray-50 bg-gray-50/50">
                                <span className="text-sm text-gray-500 font-medium">Trang {page} / {totalPages}</span>
                                <div className="flex gap-3">
                                    <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                        <ChevronLeft className="w-4 h-4" /> Trước
                                    </button>
                                    <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                        Sau <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. PRODUCTS TAB */}
                {activeTab === 'products' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Danh sách sản phẩm</h2>
                            <button onClick={() => openProductModal(null)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700"><Plus className="w-4 h-4" /> Thêm sản phẩm</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left min-w-[800px]">
                                    <thead className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase font-bold">
                                        <tr><th className="p-4">Hình ảnh</th><th className="p-4">ID</th><th className="p-4">Tên</th><th className="p-4">Giá</th><th className="p-4">Danh mục</th><th className="p-4 text-center">Thao tác</th></tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {products.map(prod => (
                                            <tr key={prod.id} className="hover:bg-gray-50">
                                                <td className="p-4"><div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">{prod.thumbnail && prod.thumbnail.startsWith('http') ? <img src={prod.thumbnail} alt="" className="w-full h-full object-cover" /> : <span className="text-xs text-gray-400">No IMG</span>}</div></td>
                                                <td className="p-4 text-sm font-mono text-gray-600">{prod.id}</td>
                                                <td className="p-4 text-sm font-bold text-gray-800">{prod.name}</td>
                                                <td className="p-4 text-sm text-indigo-600 font-bold">{prod.price.toLocaleString()} đ</td>
                                                <td className="p-4 text-sm text-gray-600"><span className="bg-gray-100 px-2 py-1 rounded text-xs">{prod.category}</span></td>
                                                <td className="p-4 text-center flex justify-center gap-2">
                                                    <button onClick={() => setViewingProduct(prod)} className="p-1.5 bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100" title="Xem chi tiết"><Eye className="w-4 h-4" /></button>
                                                    <button onClick={() => openProductModal(prod)} className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100" title="Chỉnh sửa"><Edit className="w-4 h-4" /></button>
                                                    <button onClick={() => handleDeleteProduct(prod.id)} className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100" title="Xóa"><Trash2 className="w-4 h-4" /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-between items-center mt-4 px-4 p-4 border-t border-gray-50 bg-gray-50/50">
                                <span className="text-sm text-gray-500 font-medium">Trang {page} / {totalPages}</span>
                                <div className="flex gap-3">
                                    <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                        <ChevronLeft className="w-4 h-4" /> Trước
                                    </button>
                                    <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                        Sau <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 5. CATEGORIES TAB */}
                {activeTab === 'categories' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Danh sách Danh mục</h2>
                            <button onClick={() => openCategoryModal(null)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700"><Plus className="w-4 h-4" /> Thêm danh mục</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase font-bold">
                                    <tr><th className="p-4">ID</th><th className="p-4">Tên danh mục</th><th className="p-4 text-center">Thao tác</th></tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {categories.map(cat => (
                                        <tr key={cat.id} className="hover:bg-gray-50">
                                            <td className="p-4 text-sm font-mono text-gray-600">#{cat.id}</td>
                                            <td className="p-4 text-sm font-bold text-gray-800">{cat.category_name}</td>
                                            <td className="p-4 text-center flex justify-center gap-2">
                                                <button onClick={() => openCategoryModal(cat)} className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"><Edit className="w-4 h-4" /></button>
                                                <button onClick={() => handleDeleteCategory(cat.id)} className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100"><Trash2 className="w-4 h-4" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                    {categories.length === 0 && <tr><td colSpan={3} className="p-6 text-center text-gray-500">Chưa có danh mục nào.</td></tr>}
                                </tbody>
                            </table>
                            <div className="flex justify-between items-center mt-4 px-4 p-4 border-t border-gray-50 bg-gray-50/50">
                                <span className="text-sm text-gray-500 font-medium">Trang {page} / {totalPages}</span>
                                <div className="flex gap-3">
                                    <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                        <ChevronLeft className="w-4 h-4" /> Trước
                                    </button>
                                    <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                        Sau <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 6. HERO SLIDES TAB */}
                {activeTab === 'slides' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Danh sách Banner</h2>
                            <button onClick={() => openSlideModal(null)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700"><Plus className="w-4 h-4" /> Thêm Slide</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {slides.map(slide => (
                                <div key={slide.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group relative h-48">
                                    <div className="absolute inset-0"><img src={slide.bg_image || ''} alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-black/50"></div></div>
                                    <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                                        <span className="text-xs font-bold bg-indigo-600 px-2 py-1 rounded w-fit mb-2">{slide.tag}</span>
                                        <h3 className="text-xl font-bold">{slide.title} <span className={`bg-clip-text bg-gradient-to-r ${slide.gradient}`}>{slide.highlight}</span></h3>
                                        <p className="text-sm text-gray-300 mt-1 line-clamp-2">{slide.description}</p>
                                    </div>
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => openSlideModal(slide)} className="p-2 bg-white text-blue-600 rounded-full shadow hover:bg-blue-50"><Edit className="w-4 h-4" /></button>
                                        <button onClick={() => handleDeleteSlide(slide.id)} className="p-2 bg-white text-red-600 rounded-full shadow hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            ))}
                            {slides.length === 0 && <div className="p-6 text-center text-gray-500 col-span-2">Chưa có banner nào.</div>}
                        </div>
                    </div>
                )}

                {/* LOGS TAB */}
                {activeTab === 'logs' && <div className="text-center py-10 text-gray-500">Chức năng đang cập nhật...</div>}
            </main>

            {/* --- MODALS --- */}

            {/* *** NEW: View Order Detail Modal *** */}
            {viewingOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="bg-indigo-900 p-4 flex justify-between items-center text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/10 p-2 rounded-lg"><ShoppingCart className="w-5 h-5" /></div>
                                <div>
                                    <h3 className="font-bold">Chi tiết đơn hàng</h3>
                                    <p className="text-xs text-indigo-200 font-mono">#{viewingOrder.order_code}</p>
                                </div>
                            </div>
                            <button onClick={() => setViewingOrder(null)} className="hover:bg-white/20 p-1.5 rounded transition-colors"><X className="w-5 h-5" /></button>
                        </div>

                        <div className="p-6 overflow-y-auto space-y-8">
                            {/* 1. General Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase"><User className="w-4 h-4" /> Khách hàng</div>
                                        <button onClick={() => openEditModal(viewingOrder)} className="text-xs text-blue-600 hover:underline">Sửa thông tin</button>
                                    </div>
                                    <p className="font-medium text-gray-900 break-all">{viewingOrder.user_email}</p>
                                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase"><Calendar className="w-4 h-4" /> Thời gian</div>
                                    <p className="font-medium text-gray-900">{new Date(viewingOrder.created_at || '').toLocaleString('vi-VN')}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-500 font-semibold uppercase"><CreditCard className="w-4 h-4" /> Thanh toán</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${viewingOrder.status === process.env.NEXT_PUBLIC_STATUS_ODR_PAID ? 'bg-green-100 text-green-700' : viewingOrder.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{viewingOrder.status}</span>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">Tổng tiền:</p>
                                        <p className="text-2xl font-bold text-indigo-600">{viewingOrder.total_amount?.toLocaleString()} đ</p>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Order Items (Sản phẩm) */}
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><List className="w-4 h-4" /> Danh sách sản phẩm</h4>
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-gray-50 text-gray-500 font-semibold border-b">
                                            <tr>
                                                <th className="p-3 pl-4">Sản phẩm</th>
                                                <th className="p-3 text-center">SL</th>
                                                <th className="p-3 text-right">Thành tiền</th>
                                                {/* <th className="p-3 text-center w-24">Thao tác</th> */}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {viewingOrder.order_item?.map((item: any, idx: number) => {
                                                const isEditing = editingOrderItemIndex === idx;
                                                return (
                                                    <tr key={idx} className="hover:bg-gray-50">
                                                        <td className="p-3 pl-4">
                                                            <p className="font-bold text-gray-800">{item.productName}</p>
                                                            <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded mt-1 inline-block">{item.optionName}</span>
                                                        </td>
                                                        <td className="p-3 text-center font-medium text-gray-600">
                                                            {false ? (
                                                                <input
                                                                    type="number"
                                                                    className="w-16 p-1 border rounded text-center"
                                                                    value={tempOrderItem.quantity}
                                                                    onChange={(e) => setTempOrderItem({ ...tempOrderItem, quantity: Number(e.target.value) })}
                                                                />
                                                            ) : (
                                                                `x${item.quantity}`
                                                            )}
                                                        </td>
                                                        <td className="p-3 text-right font-medium text-gray-600">
                                                            {false ? (
                                                                <input
                                                                    type="number"
                                                                    className="w-24 p-1 border rounded text-right"
                                                                    value={tempOrderItem.price}
                                                                    onChange={(e) => setTempOrderItem({ ...tempOrderItem, price: Number(e.target.value) })}
                                                                />
                                                            ) : (
                                                                item.price ? `${item.price.toLocaleString()} đ` : '-'
                                                            )}
                                                        </td>
                                                        {/* <td className="p-3 text-center">
                                                            {isEditing ? (
                                                                <div className="flex justify-center gap-1">
                                                                    <button onClick={handleSaveOrderItem} className="p-1 text-green-600 hover:bg-green-50 rounded"><Save className="w-4 h-4" /></button>
                                                                    <button onClick={() => setEditingOrderItemIndex(null)} className="p-1 text-gray-500 hover:bg-gray-50 rounded"><XCircle className="w-4 h-4" /></button>
                                                                </div>
                                                            ) : (
                                                                <div className="flex justify-center gap-1">
                                                                    <button onClick={() => { setEditingOrderItemIndex(idx); setTempOrderItem(item); }} className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Sửa"><Edit className="w-4 h-4" /></button>
                                                                    <button onClick={() => handleDeleteOrderItem(idx)} className="p-1 text-red-600 hover:bg-red-50 rounded" title="Xóa"><Trash2 className="w-4 h-4" /></button>
                                                                </div>
                                                            )}
                                                        </td> */}
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 3. Linked Accounts (Tài khoản bàn giao) */}
                            {/* Note: This assumes accounts state has order_id link or similar mechanism. Since we don't have real backend, we filter by order_id concept or show nothing if empty */}
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Key className="w-4 h-4 text-orange-600" /> Tài khoản đã bàn giao</h4>
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-gray-50 text-gray-500 font-semibold border-b">
                                            <tr>
                                                <th className="p-3 pl-4">Dịch vụ (Gói)</th>
                                                <th className="p-3">Tài khoản (Username)</th>
                                                <th className="p-3">Mật khẩu</th>
                                                <th className="p-3 text-center w-24">Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {/* Priority 1: Use accounts directly nested in the viewingOrder object (from API include) */}
                                            {/* Priority 2: Fallback to filtering global accounts list if match found */}
                                            {displayAccounts.length > 0 ? (
                                                displayAccounts.map((acc: any) => {
                                                    const isEditingAcc = editingLinkedAccountId === acc.id;
                                                    const prodDetails = getProductDetails(acc.product_id, acc.option_id);

                                                    return (
                                                        <tr key={acc.id} className="hover:bg-gray-50">
                                                            <td className="p-3 pl-4 text-gray-800 font-medium">
                                                                {prodDetails.prodName}
                                                                <br /><span className="text-xs text-gray-500 font-normal">{prodDetails.optName}</span>
                                                            </td>
                                                            <td className="p-3 text-gray-800 ">
                                                                {isEditingAcc ? <input className="border rounded p-1 w-full" value={tempLinkedAccount.username} onChange={e => setTempLinkedAccount({ ...tempLinkedAccount, username: e.target.value })} /> : <span className="font-mono text-gray-700">{acc.username}</span>}
                                                            </td>
                                                            <td className="p-3 text-gray-800 ">
                                                                {isEditingAcc ? <input className="border rounded p-1 w-full" value={tempLinkedAccount.password} onChange={e => setTempLinkedAccount({ ...tempLinkedAccount, password: e.target.value })} /> : <span className="font-mono text-gray-700">******</span>}
                                                            </td>
                                                            <td className="p-3 text-center">
                                                                {isEditingAcc ? (
                                                                    <div className="flex justify-center gap-1">
                                                                        <button onClick={handleSaveLinkedAccount} className="p-1 text-green-600 hover:bg-green-50 rounded"><Save className="w-4 h-4" /></button>
                                                                        <button onClick={() => setEditingLinkedAccountId(null)} className="p-1 text-gray-500 hover:bg-gray-50 rounded"><XCircle className="w-4 h-4" /></button>
                                                                    </div>
                                                                ) : (
                                                                    <div className="flex justify-center gap-1">
                                                                        <button onClick={() => { setEditingLinkedAccountId(acc.id); setTempLinkedAccount(acc); }} className="p-1 text-blue-600 hover:bg-blue-50 rounded" title="Sửa thông tin"><Edit className="w-4 h-4" /></button>
                                                                        <button onClick={() => handleUnlinkAccount(acc.id)} className="p-1 text-red-600 hover:bg-red-50 rounded" title="Gỡ khỏi đơn"><Trash2 className="w-4 h-4" /></button>
                                                                    </div>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                <tr><td colSpan={4} className="p-4 text-center text-gray-400 italic">Chưa có thông tin tài khoản bàn giao (hoặc chưa liên kết)</td></tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-end gap-3 shrink-0">
                            <button onClick={() => setViewingOrder(null)} className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">Đóng</button>
                            <button onClick={() => { setViewingOrder(null); openEditModal(viewingOrder); }} className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-200"><Edit className="w-4 h-4" /> Cập nhật trạng thái đơn</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Order Modal (Status Only) */}
            {editingOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="bg-indigo-900 p-4 flex justify-between items-center text-white"><h3 className="font-bold">Cập nhật đơn hàng #{editingOrder.order_code}</h3><button onClick={() => setEditingOrder(null)} className="hover:bg-white/20 p-1 rounded"><X className="w-5 h-5" /></button></div>
                        <form onSubmit={handleUpdateOrder} className="p-6 space-y-4">
                            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email Khách Hàng</label><input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} className="text-gray-900 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                            <div><label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label><select value={editStatus} onChange={(e) => setEditStatus(e.target.value)} className="text-gray-900 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"><option value="PENDING">PENDING (Chờ thanh toán)</option><option value={process.env.NEXT_PUBLIC_STATUS_ODR_PAID}>PAID (Đã thanh toán)</option><option value={process.env.NEXT_PUBLIC_STATUS_ODR_CANCEL}>CANCELLED (Đã hủy)</option></select></div>
                            <div className="flex justify-end gap-3 mt-6"><button type="button" onClick={() => setEditingOrder(null)} className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium">Hủy</button><button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 font-medium shadow-lg shadow-indigo-200">Lưu thay đổi</button></div>
                        </form>
                    </div>
                </div>
            )}
            {/* Edit Account Modal */}
            {editingAccount && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="bg-indigo-900 p-4 flex justify-between items-center text-white"><h3 className="font-bold">Sửa tài khoản #{editingAccount.id}</h3><button onClick={() => setEditingAccount(null)} className="hover:bg-white/20 p-1 rounded"><X className="w-5 h-5" /></button></div>
                        <form onSubmit={handleUpdateAccount} className="p-6 space-y-4">
                            <div><label className="block text-sm font-medium text-gray-700 mb-1">Username</label><input type="text" value={editAccUser} onChange={(e) => setEditAccUser(e.target.value)} className="text-gray-800 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                            <div><label className="block text-sm font-medium text-gray-700 mb-1">Password</label><input type="text" value={editAccPass} onChange={(e) => setEditAccPass(e.target.value)} className="text-gray-800 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                            <div><label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label><select value={editAccSold ? "true" : "false"} onChange={(e) => setEditAccSold(e.target.value === "true")} className=" text-gray-800 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"><option value="false">Sẵn sàng</option><option value="true">Đã bán</option></select></div>
                            <div className="flex justify-end gap-3 mt-6"><button type="button" onClick={() => setEditingAccount(null)} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">Hủy</button><button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium">Lưu thay đổi</button></div>
                        </form>
                    </div>
                </div>
            )}
            {/* Product Modal */}
            {isProductModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="bg-indigo-900 p-4 flex justify-between items-center text-white shrink-0"><h3 className="font-bold">{editingProduct ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}</h3><button onClick={() => setIsProductModalOpen(false)} className="hover:bg-white/20 p-1 rounded"><X className="w-5 h-5" /></button></div>
                        <form onSubmit={handleSaveProduct} className="p-6 space-y-4 overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mã ID (Slug)</label><input type="text" required disabled={!!editingProduct} value={prodId} onChange={e => setProdId(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg disabled:bg-gray-200 text-gray-900" placeholder="vd: netflix-premium" /></div>
                                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tên hiển thị</label><input type="text" required value={prodName} onChange={e => setProdName(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900" /></div>
                                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Giá bán</label><input type="number" required value={prodPrice} onChange={e => setProdPrice(Number(e.target.value))} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900" /></div>
                                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Giá gốc</label><input type="number" value={prodOriginalPrice} onChange={e => setProdOriginalPrice(Number(e.target.value))} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900" /></div>
                                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Danh mục</label><select value={prodCategory} onChange={e => setProdCategory(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900">{categories.length === 0 && <option value="">Đang tải...</option>}{categories.map((cat) => (<option key={cat.id} value={cat.category_name || ''}>{cat.category_name}</option>))}</select></div>
                                <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Youtube ID</label><div className="relative"><input type="text" value={prodYoutubeId} onChange={e => setProdYoutubeId(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 pl-9" placeholder="ID (vd: dQw4w9WgXcQ)" /><Youtube className="w-4 h-4 text-red-600 absolute left-3 top-3" /></div></div>
                            </div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Link Ảnh</label><div className="flex gap-2"><input type="text" required value={prodThumbnail} onChange={e => setProdThumbnail(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900" placeholder="https://..." />{prodThumbnail && <img src={prodThumbnail} alt="" className="w-10 h-10 rounded object-cover border" />}</div></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mô tả ngắn</label><textarea rows={3} value={prodDesc} onChange={e => setProdDesc(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900" /></div>

                            {/* Options */}
                            <div className="border-t border-gray-100 pt-4 mt-4">
                                <div className="flex justify-between items-center mb-2"><label className="block text-xs font-bold text-gray-500 uppercase">Các gói dịch vụ (Options)</label><button type="button" onClick={() => setProdOptions([...prodOptions, { id: '1', name: '', price: 0, original_price: 0 }])} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded hover:bg-indigo-100 font-bold flex items-center gap-1"><Plus className="w-3 h-3" /> Thêm gói</button></div>
                                <div className="space-y-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                                    {prodOptions.map((opt, idx) => (<div key={idx} className="flex gap-2 items-center bg-gray-50 p-2 rounded-lg border border-gray-200"><input type="text" placeholder="Tên gói" className="flex-1 p-1.5 text-sm border rounded outline-none text-gray-900" value={opt.name} onChange={e => { const n = [...prodOptions]; n[idx].name = e.target.value; setProdOptions(n); }} /><input type="number" placeholder="Giá bán" className="w-24 p-1.5 text-sm border rounded outline-none text-gray-900" value={opt.price === 0 ? '' : opt.price} onChange={e => { const n = [...prodOptions]; n[idx].price = Number(e.target.value); setProdOptions(n); }} /><input type="number" placeholder="Giá gốc" className="w-24 p-1.5 text-sm border rounded outline-none text-gray-500" value={opt.original_price === 0 ? '' : opt.original_price} onChange={e => { const n = [...prodOptions]; n[idx].original_price = Number(e.target.value); setProdOptions(n); }} /><button type="button" onClick={() => setProdOptions(prodOptions.filter((_, i) => i !== idx))} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-4 h-4" /></button></div>))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex justify-between items-center mb-2"><label className="block text-xs font-bold text-gray-700 uppercase flex items-center gap-2"><List className="w-4 h-4 text-green-600" /> Tính năng nổi bật</label><button type="button" onClick={() => setProdFeatures([...prodFeatures, { id: `temp-${Date.now()}`, product_id: prodId, feature: '' }])} className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded hover:bg-green-100 font-bold">+ Thêm dòng</button></div>
                                <div className="space-y-2">
                                    {prodFeatures.map((item, idx) => (<div key={idx} className="flex gap-2"><div className="mt-2"><CheckCircle2 className="w-4 h-4 text-green-500" /></div><input type="text" placeholder="Nhập tính năng..." className="flex-1 p-2 text-sm border rounded text-gray-900" value={item.feature} onChange={e => { const n = [...prodFeatures]; n[idx] = { ...n[idx], feature: e.target.value }; setProdFeatures(n); }} /><button type="button" onClick={() => setProdFeatures(prodFeatures.filter((_, i) => i !== idx))} className="text-red-500 p-1"><Trash2 className="w-4 h-4" /></button></div>))}
                                </div>
                            </div>

                            {/* Guides */}
                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex justify-between items-center mb-2"><label className="block text-xs font-bold text-gray-700 uppercase flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-600" /> Hướng dẫn sử dụng</label><button type="button" onClick={() => setProdGuides([...prodGuides, { id: `temp-${Date.now()}`, product_id: prodId, step_order: String(prodGuides.length + 1), step_text: '' }])} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded hover:bg-blue-100 font-bold">+ Thêm bước</button></div>
                                <div className="space-y-2">
                                    {prodGuides.map((item, idx) => (<div key={idx} className="flex gap-2 items-start"><span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mt-1">B{idx + 1}</span><textarea rows={2} placeholder={`Nội dung bước ${idx + 1}...`} className="flex-1 p-2 text-sm border rounded text-gray-900" value={item.step_text} onChange={e => { const n = [...prodGuides]; n[idx] = { ...n[idx], step_text: e.target.value }; setProdGuides(n); }} /><button type="button" onClick={() => setProdGuides(prodGuides.filter((_, i) => i !== idx))} className="text-red-500 p-1 mt-1"><Trash2 className="w-4 h-4" /></button></div>))}
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100"><button type="button" onClick={() => setIsProductModalOpen(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">Hủy</button><button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">{editingProduct ? 'Lưu thay đổi' : 'Tạo sản phẩm'}</button></div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Product Detail Modal */}
            {viewingProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="bg-indigo-900 p-4 flex justify-between items-center text-white shrink-0">
                            <h3 className="font-bold flex items-center gap-2"><Tag className="w-5 h-5" /> Chi tiết sản phẩm</h3>
                            <button onClick={() => setViewingProduct(null)} className="hover:bg-white/20 p-1 rounded transition-colors"><X className="w-6 h-6" /></button>
                        </div>

                        <div className="p-6 overflow-y-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column: Media & Info */}
                                <div className="space-y-6">
                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                        {viewingProduct.thumbnail && viewingProduct.thumbnail.startsWith('http') ? (
                                            <img src={viewingProduct.thumbnail} alt={viewingProduct.name} className="w-full h-auto object-cover" />
                                        ) : (
                                            <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">Không có ảnh</div>
                                        )}
                                    </div>

                                    {viewingProduct.youtube_video_id && (
                                        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                            <iframe
                                                className="w-full aspect-video"
                                                src={`https://www.youtube.com/embed/${viewingProduct.youtube_video_id}`}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Details */}
                                <div className="space-y-6">
                                    <div>
                                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">{viewingProduct.category}</span>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{viewingProduct.name}</h2>
                                        <p className="text-sm font-mono text-gray-500 mb-4">ID: {viewingProduct.id}</p>
                                        <div className="flex items-end gap-3 mb-4">
                                            <span className="text-2xl font-bold text-indigo-600">{viewingProduct.price.toLocaleString()} đ</span>
                                            {viewingProduct.original_price && viewingProduct.original_price > viewingProduct.price && (
                                                <span className="text-sm text-gray-400 line-through mb-1">{viewingProduct.original_price.toLocaleString()} đ</span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">{viewingProduct.description}</p>
                                    </div>

                                    {/* Options Table */}
                                    {viewingProduct.product_options && viewingProduct.product_options.length > 0 && (
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Package className="w-4 h-4" /> Các gói dịch vụ</h4>
                                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                                <table className="w-full text-sm text-left">
                                                    <thead className="bg-gray-50 text-gray-500 font-semibold border-b">
                                                        <tr><th className="p-3">Tên gói</th><th className="p-3 text-right">Giá</th></tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100">
                                                        {viewingProduct.product_options.map((opt, i) => (
                                                            <tr key={i}>
                                                                <td className="p-3 text-gray-800">{opt.name}</td>
                                                                <td className="p-3 text-right font-bold text-indigo-600">{opt.price.toLocaleString()} đ</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {/* Features List */}
                                    {viewingProduct.product_features && viewingProduct.product_features.length > 0 && (
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Tính năng nổi bật</h4>
                                            <ul className="space-y-2">
                                                {viewingProduct.product_features.map((f, i) => (
                                                    <li key={i} className="flex gap-3 text-sm text-gray-700 items-start">
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{f.feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Guides List */}
                                    {viewingProduct.product_guides && viewingProduct.product_guides.length > 0 && (
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-600" /> Hướng dẫn</h4>
                                            <div className="space-y-3">
                                                {viewingProduct.product_guides.map((g, i) => (
                                                    <div key={i} className="flex gap-3 text-sm bg-blue-50 p-3 rounded-lg border border-blue-100">
                                                        <span className="font-bold text-blue-600 shrink-0">B{i + 1}</span>
                                                        <span className="text-gray-700">{g.step_text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-end gap-3 shrink-0">
                            <button onClick={() => setViewingProduct(null)} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors">Đóng</button>
                            <button onClick={() => { setViewingProduct(null); openProductModal(viewingProduct); }} className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"><Edit className="w-4 h-4" /> Chỉnh sửa</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Category Modal */}
            {isCategoryModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
                        <div className="bg-indigo-900 p-4 flex justify-between items-center text-white"><h3 className="font-bold">{editingCategory ? 'Sửa danh mục' : 'Thêm danh mục mới'}</h3><button onClick={() => setIsCategoryModalOpen(false)} className="hover:bg-white/20 p-1 rounded"><X className="w-5 h-5" /></button></div>
                        <form onSubmit={handleSaveCategory} className="p-6 space-y-4">
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tên danh mục</label><input type="text" required value={catNameForm} onChange={e => setCatNameForm(e.target.value)} className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900" placeholder="Ví dụ: Giải trí" /></div>
                            <div className="flex justify-end gap-3 pt-2"><button type="button" onClick={() => setIsCategoryModalOpen(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">Hủy</button><button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium">Lưu</button></div>
                        </form>
                    </div>
                </div>
            )}
            {/* Slide Modal */}
            {isSlideModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
                        <div className="bg-indigo-900 p-4 flex justify-between items-center text-white"><h3 className="font-bold">{editingSlide ? 'Cập nhật Banner' : 'Thêm Banner mới'}</h3><button onClick={() => setIsSlideModalOpen(false)} className="hover:bg-white/20 p-1 rounded"><X className="w-5 h-5" /></button></div>
                        <form onSubmit={handleSaveSlide} className="p-6 space-y-4">
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tag</label><input type="text" value={slideTag} onChange={e => setSlideTag(e.target.value)} className="w-full p-2 border rounded text-gray-900" placeholder="VD: HOT DEAL" /></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tiêu đề</label><input type="text" value={slideTitle} onChange={e => setSlideTitle(e.target.value)} className="w-full p-2 border rounded text-gray-900" /></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Highlight</label><input type="text" value={slideHighlight} onChange={e => setSlideHighlight(e.target.value)} className="w-full p-2 border rounded text-gray-900" /></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Gradient (Tailwind)</label><input type="text" value={slideGradient} onChange={e => setSlideGradient(e.target.value)} className="w-full p-2 border rounded text-gray-900" placeholder="from-blue-500 to-cyan-500" /></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mô tả</label><textarea rows={2} value={slideDesc} onChange={e => setSlideDesc(e.target.value)} className="w-full p-2 border rounded text-gray-900" /></div>
                            <div><label className="block text-xs font-bold text-gray-500 uppercase mb-1">Ảnh nền (URL)</label><input type="text" value={slideBg} onChange={e => setSlideBg(e.target.value)} className="w-full p-2 border rounded text-gray-900" /></div>
                            <div className="flex justify-end gap-3 pt-4"><button type="button" onClick={() => setIsSlideModalOpen(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded font-medium">Hủy</button><button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded font-medium">Lưu</button></div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};