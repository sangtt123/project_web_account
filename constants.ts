
import { Category, Product } from './types';

export const APP_NAME = "AutoKey Store";

// Định nghĩa dữ liệu cho các Slide
export const HERO_SLIDES = [
    {
        id: 1,
        tag: "Hệ thống tự động 24/7",
        title: "Thế giới bản quyền",
        highlight: "Giá Rẻ & Uy Tín",
        description: "Nâng tầm trải nghiệm số của bạn với kho tài khoản Netflix, Spotify, GPT-4 và phần mềm bản quyền chính hãng.",
        bgImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
        gradient: "from-blue-400 via-indigo-400 to-purple-400",
        btnColor: "text-indigo-950"
    },
    {
        id: 2,
        tag: "Giải trí thả ga",
        title: "Xem phim 4K &",
        highlight: "Nghe nhạc không QC",
        description: "Sở hữu ngay tài khoản Netflix Premium, YouTube Premium, Spotify chính chủ với giá chỉ bằng 1/10 gốc.",
        bgImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8efe85?auto=format&fit=crop&q=80",
        gradient: "from-red-400 via-pink-500 to-purple-500",
        btnColor: "text-red-900"
    },
    {
        id: 3,
        tag: "Công việc hiệu quả",
        title: "Trợ lý AI &",
        highlight: "Office 365 Bản Quyền",
        description: "Tăng tốc công việc với ChatGPT Plus, Canva Pro và bộ Office 365 chính hãng. Bảo hành trọn đời.",
        bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
        gradient: "from-emerald-400 via-teal-400 to-cyan-400",
        btnColor: "text-teal-900"
    },
    {
        id: 4,
        tag: "Công việc hiệu quả",
        title: "Trợ lý AI &",
        highlight: "Office 365 Bản Quyền",
        description: "Tăng tốc công việc với ChatGPT Plus, Canva Pro và bộ Office 365 chính hãng. Bảo hành trọn đời.",
        bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
        gradient: "from-emerald-400 via-teal-400 to-cyan-400",
        btnColor: "text-teal-900"
    }
];


export const PRODUCTS: Product[] = [
    // --- STREAMING ---
    {
        id: "netflix-prem",
        name: "Netflix Premium 4K",
        description: "Xem phim chất lượng Ultra HD 4K. Profile riêng tư, có mã PIN bảo mật.",
        price: 69000, // Giá thấp nhất để hiển thị "Từ..."
        originalPrice: 260000,
        thumbnail: "https://picsum.photos/seed/netflix/400/300",
        category: Category.STREAMING,
        features: ["Chất lượng 4K", "Profile riêng", "Xem trên TV/ĐT", "Bảo hành full time"],
        options: [
            { id: "1m", name: "1 Tháng", price: 69000, originalPrice: 260000 },
            { id: "3m", name: "3 Tháng", price: 199000, originalPrice: 780000 },
            { id: "6m", name: "6 Tháng", price: 380000, originalPrice: 1560000 },
            { id: "1y", name: "1 Năm", price: 720000, originalPrice: 3120000 }
        ]
    },
    {
        id: "youtube-prem",
        name: "YouTube Premium (Chính chủ)",
        description: "Xem YouTube không quảng cáo, bao gồm YouTube Music. Nâng cấp trên chính email của bạn.",
        price: 25000,
        originalPrice: 79000,
        thumbnail: "https://picsum.photos/seed/youtube/400/300",
        category: Category.STREAMING,
        features: ["Sạch bóng quảng cáo", "Phát nền tắt màn hình", "Kèm YouTube Music", "Nâng mail chính chủ"],
        options: [
            { id: "1m", name: "1 Tháng", price: 25000, originalPrice: 79000 },
            { id: "6m", name: "6 Tháng", price: 120000, originalPrice: 474000 },
            { id: "1y", name: "1 Năm", price: 220000, originalPrice: 948000 }
        ]
    },
    {
        id: "spotify-prem",
        name: "Spotify Premium",
        description: "Nâng cấp chính chủ tài khoản của bạn. Nghe nhạc không quảng cáo, tải nhạc offline.",
        price: 35000,
        originalPrice: 59000,
        thumbnail: "https://picsum.photos/seed/spotify/400/300",
        category: Category.STREAMING,
        features: ["Nâng cấp chính chủ", "Không quảng cáo", "Nghe Offline", "Bảo hành 1 năm"],
        options: [
            { id: "1y", name: "1 Năm", price: 250000, originalPrice: 700000 },
            { id: "fam", name: "Gói Family (Chủ phòng)", price: 350000, originalPrice: 900000 }
        ]
    },
    {
        id: "vieon-vip",
        name: "VieON VIP + K+",
        description: "Xem kênh K+ Ngoại hạng Anh, phim Việt độc quyền, show giải trí sớm nhất.",
        price: 69000,
        originalPrice: 159000,
        thumbnail: "https://picsum.photos/seed/vieon/400/300",
        category: Category.STREAMING,
        features: ["Bóng đá K+ Live", "Phim bộ độc quyền", "Không quảng cáo", "Full HD 1080p"],
        options: [
            { id: "1m", name: "1 Tháng", price: 69000, originalPrice: 159000 },
            { id: "3m", name: "3 Tháng", price: 180000, originalPrice: 477000 },
            { id: "1y", name: "1 Năm (Siêu Rẻ)", price: 550000, originalPrice: 1900000 }
        ]
    },
    {
        id: "galaxy-play",
        name: "Galaxy Play Cao Cấp",
        description: "Kho phim chiếu rạp Việt Nam lớn nhất. Xem phim không giới hạn.",
        price: 45000,
        originalPrice: 70000,
        thumbnail: "https://picsum.photos/seed/galaxy/400/300",
        category: Category.STREAMING,
        features: ["Phim chiếu rạp", "Xem 4 thiết bị", "Không quảng cáo", "Âm thanh Dolby 5.1"],
        options: [
            { id: "1m", name: "1 Tháng", price: 45000, originalPrice: 70000 },
            { id: "6m", name: "6 Tháng", price: 220000, originalPrice: 420000 },
            { id: "1y", name: "1 Năm", price: 390000, originalPrice: 840000 }
        ]
    },

    // --- WORK TOOLS ---
    {
        id: "gpt-plus",
        name: "ChatGPT Plus / Team",
        description: "Sử dụng GPT-4o, DALL-E 3 và phân tích dữ liệu nâng cao với chi phí tiết kiệm.",
        price: 99000,
        originalPrice: 500000,
        thumbnail: "https://picsum.photos/seed/gpt/400/300",
        category: Category.WORK,
        features: ["Truy cập GPT-4o", "Vẽ ảnh DALL-E 3", "Tốc độ nhanh", "Ổn định cao"],
        options: [
            { id: "share", name: "Tài khoản dùng chung", price: 99000, originalPrice: 500000 },
            { id: "private", name: "Tài khoản riêng (1 tháng)", price: 450000, originalPrice: 600000 }
        ]
    },
    {
        id: "canva-pro",
        name: "Canva Pro (Nâng cấp)",
        description: "Thiết kế chuyên nghiệp với Canva Pro. Truy cập kho tài nguyên Premium không giới hạn.",
        price: 49000,
        originalPrice: 150000,
        thumbnail: "https://picsum.photos/seed/canva/400/300",
        category: Category.WORK,
        features: ["Nâng cấp qua Email", "Kho ảnh Premium", "Xóa phông nền", "Bảo hành trọn đời"],
        options: [
            { id: "life", name: "Vĩnh Viễn (Trọn đời)", price: 149000, originalPrice: 900000 },
            { id: "1y", name: "1 Năm", price: 49000, originalPrice: 150000 }
        ]
    },
    {
        id: "capcut-pro",
        name: "CapCut Pro",
        description: "Mở khóa toàn bộ hiệu ứng Pro, xóa watermark, lưu trữ đám mây.",
        price: 150000,
        originalPrice: 900000,
        thumbnail: "https://picsum.photos/seed/capcut/400/300",
        category: Category.WORK,
        features: ["Hiệu ứng Pro", "Lưu trữ đám mây", "Xóa Logo", "Đa nền tảng"],
        options: [
            { id: "1y", name: "1 Năm (80GB Cloud)", price: 150000, originalPrice: 900000 },
            { id: "life", name: "Vĩnh Viễn (Nội địa)", price: 250000, originalPrice: 1500000 }
        ]
    },
    {
        id: "office-365",
        name: "Microsoft Office 365",
        description: "Bộ ứng dụng văn phòng Word, Excel, PowerPoint + 1TB OneDrive.",
        price: 190000,
        originalPrice: 1200000,
        thumbnail: "https://picsum.photos/seed/office/400/300",
        category: Category.WORK,
        features: ["Bản quyền 5 thiết bị", "1TB OneDrive", "Cập nhật mới nhất", "Bảo hành full"]
    },
    {
        id: "windows-11",
        name: "Key Windows 10/11 Pro",
        description: "Key kích hoạt bản quyền Windows 11 Pro vĩnh viễn, update thoải mái.",
        price: 99000,
        originalPrice: 3500000,
        thumbnail: "https://picsum.photos/seed/win11/400/300",
        category: Category.WORK,
        features: ["Kích hoạt vĩnh viễn", "Update trực tiếp", "Hỗ trợ cài đặt", "Bảo hành trọn đời"],
        options: [
            { id: "win10", name: "Windows 10 Pro", price: 99000, originalPrice: 2500000 },
            { id: "win11", name: "Windows 11 Pro", price: 150000, originalPrice: 3500000 },
            { id: "office21", name: "Office 2021 Pro Plus", price: 190000, originalPrice: 4000000 }
        ]
    },
    {
        id: "adobe-full",
        name: "Adobe Creative Cloud",
        description: "Full bộ ứng dụng Adobe: Photoshop, Illustrator, Premiere Pro... 100GB Cloud.",
        price: 250000,
        originalPrice: 1800000,
        thumbnail: "https://picsum.photos/seed/adobe/400/300",
        category: Category.WORK,
        features: ["Full App Adobe", "100GB Cloud", "Có Firefly AI", "Nâng cấp chính chủ"]
    },
    {
        id: "google-one",
        name: "Google One (Drive)",
        description: "Nâng cấp dung lượng Google Drive, Gmail, Photos.",
        price: 150000,
        originalPrice: 450000,
        thumbnail: "https://picsum.photos/seed/drive/400/300",
        category: Category.WORK,
        features: ["Tăng dung lượng", "Chia sẻ gia đình", "VPN Google", "Bảo hành 1 năm"],
        options: [
            { id: "100gb", name: "100 GB (1 Năm)", price: 150000, originalPrice: 450000 },
            { id: "200gb", name: "200 GB (1 Năm)", price: 250000, originalPrice: 690000 },
            { id: "2tb", name: "2 TB (1 Năm)", price: 390000, originalPrice: 2000000 }
        ]
    },

    // --- VPN & SECURITY ---
    {
        id: "nord-vpn",
        name: "NordVPN Premium",
        description: "VPN tốt nhất thế giới, tốc độ siêu nhanh, chặn quảng cáo, chống malware.",
        price: 290000,
        originalPrice: 1800000,
        thumbnail: "https://picsum.photos/seed/nord/400/300",
        category: Category.VPN,
        features: ["6000+ Servers", "Double VPN", "Chặn quảng cáo", "Dùng 6 thiết bị"],
        options: [
            { id: "1y", name: "1 Năm", price: 290000, originalPrice: 1800000 },
            { id: "2y", name: "2 Năm", price: 490000, originalPrice: 3000000 }
        ]
    },

    // --- GAMING ---
    {
        id: "xbox-pass",
        name: "Xbox Game Pass Ultimate",
        description: "Chơi hơn 100 game chất lượng cao trên PC và Xbox. Kèm EA Play.",
        price: 90000,
        originalPrice: 300000,
        thumbnail: "https://picsum.photos/seed/xbox/400/300",
        category: Category.GAMING,
        features: ["100+ Game PC", "Kèm EA Play", "Cloud Gaming", "Code chính hãng"],
        options: [
            { id: "2m", name: "2 Tháng", price: 90000, originalPrice: 300000 },
            { id: "4m", name: "4 Tháng", price: 160000, originalPrice: 600000 }
        ]
    },
    {
        id: "steam-wallet",
        name: "Steam Wallet Global",
        description: "Thẻ nạp tiền vào tài khoản Steam, dùng để mua game bản quyền.",
        price: 150000,
        originalPrice: 160000,
        thumbnail: "https://picsum.photos/seed/steam/400/300",
        category: Category.GAMING,
        features: ["Nạp ngay", "Mua game bản quyền", "Code Global", "An toàn 100%"],
        options: [
            { id: "5usd", name: "Code $5", price: 135000, originalPrice: 150000 },
            { id: "10usd", name: "Code $10", price: 260000, originalPrice: 300000 },
            { id: "20usd", name: "Code $20", price: 480000, originalPrice: 550000 }
        ]
    },
    {
        id: "duolingo",
        name: "Duolingo Super (1 Năm)",
        description: "Học ngoại ngữ không giới hạn trái tim, không quảng cáo, luyện tập sai.",
        price: 120000,
        originalPrice: 1400000,
        thumbnail: "https://picsum.photos/seed/duolingo/400/300",
        category: Category.WORK,
        features: ["Full Trái Tim", "Không quảng cáo", "Học Offline", "Vào lớp Family"]
    }
];

// Tạo tài khoản mẫu cho tất cả sản phẩm
export const MOCK_ACCOUNTS: Record<string, { u: string, p: string }> = {
    "netflix-prem": { u: "khachhang@gmail.com", p: "AutoKey@2024" },
    "spotify-prem": { u: "link-nang-cap-da-gui-qua-email", p: "Vui lòng check inbox" },
    "canva-pro": { u: "da-gui-loi-moi", p: "Vui lòng check inbox" },
    "gpt-plus": { u: "shared-gpt@autokey.com", p: "AiRevolution!" },
    "youtube-prem": { u: "youtube-invite", p: "Check Inbox" },
    "capcut-pro": { u: "editor@autokey.com", p: "EditMaster123" },
    "office-365": { u: "office@autokey.com", p: "WorkHard2024" },
    "vieon-vip": { u: "vieon@autokey.com", p: "PhimViet2024" },
    "galaxy-play": { u: "galaxy@autokey.com", p: "CinemaHome" },
    "windows-11": { u: "Key:", p: "W269N-WFGWX-YVC9B-4J6C9-T83GX" },
    "adobe-full": { u: "invite-adobe@gmail.com", p: "Check Inbox" },
    "google-one": { u: "storage@gmail.com", p: "2TBCloud" },
    "nord-vpn": { u: "safe@nord.com", p: "NoLogsHere" },
    "xbox-pass": { u: "Code:", p: "XBOX-XXXX-XXXX-XXXX" },
    "steam-wallet": { u: "Code:", p: "STEAM-XXXX-XXXX-XXXX" },
    "duolingo": { u: "Link Invite:", p: "duolingo.com/family/x" }
};
