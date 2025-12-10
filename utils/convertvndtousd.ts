export async function getExchangeRate() {
    try {
        // Gọi API lấy tỷ giá (Base là USD)
        const res = await fetch('https://open.er-api.com/v6/latest/USD', { next: { revalidate: 3600 } });
        // revalidate: 3600 giây (1 tiếng) để cache, không gọi liên tục gây chậm

        const data = await res.json();
        if (data && data.rates && data.rates.VND) {
            return data.rates.VND;
        }
        throw new Error("Không lấy được rate");
    } catch (error) {
        console.error("Lỗi lấy tỷ giá, dùng fallback:", error);
        return 25000;
    }
}