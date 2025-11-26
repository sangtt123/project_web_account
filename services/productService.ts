// services/productService.ts
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const productService = {
    getAll: async () => {
        console.log("🔍 productService.getAll -> fetching", `${API_URL}/products`);
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            const text = await response.text();
            console.error("❌ productService.getAll failed:", response.status, text);
            throw new Error(`Failed to fetch products: ${response.status}`);
        }
        const data = await response.json();
        console.log("✅ productService.getAll response:", data);
        return data;
    },

    getById: async (id: number) => {
        console.log("🔍 productService.getById ->", id);
        const response = await fetch(`${API_URL}/products/${id}`);
        if (!response.ok) {
            const text = await response.text();
            console.error("❌ productService.getById failed:", response.status, text);
            throw new Error(`Failed to fetch product ${id}`);
        }
        const data = await response.json();
        console.log("✅ productService.getById response:", data);
        return data;
    }
};
