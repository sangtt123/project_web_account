import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

// Ideally, this is passed via environment variables
// For this demo, we assume process.env.API_KEY is available.
const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
}

export const generateShopResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "Hệ thống AI đang bảo trì (Thiếu API Key). Nhưng bạn cứ yên tâm, chúng tôi giao hàng tự động ngay lập tức!";
  }

  const productContext = PRODUCTS.map(p => 
    `- ${p.name}: ${p.price} VND. Tính năng: ${p.features.join(', ')}`
  ).join('\n');

  const systemInstruction = `
    Bạn là 'AutoBot', trợ lý bán hàng ảo cho 'AutoKey Store', một cửa hàng bán tài khoản số.
    Mục tiêu của bạn là giúp khách hàng chọn sản phẩm phù hợp bằng TIẾNG VIỆT.
    
    Đây là danh sách sản phẩm hiện tại của chúng tôi:
    ${productContext}
    
    Quy tắc:
    1. Trả lời ngắn gọn, thân thiện và chuyên nghiệp bằng Tiếng Việt.
    2. Chỉ giới thiệu các sản phẩm có trong danh sách trên.
    3. Nếu được hỏi về thanh toán, hãy nói chúng tôi hỗ trợ PayOS (VietQR, tất cả ngân hàng).
    4. Nếu được hỏi về giao hàng, hãy nhấn mạnh là GIAO NGAY LẬP TỨC và TỰ ĐỘNG qua email.
    5. Đơn vị tiền tệ là VNĐ.
    
    Câu hỏi của khách: ${userMessage}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Tôi đang gặp chút khó khăn khi suy nghĩ. Bạn hãy xem qua danh sách sản phẩm nhé!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tôi đang ngoại tuyến do lượng truy cập cao. Vui lòng xem mô tả sản phẩm trực tiếp.";
  }
};