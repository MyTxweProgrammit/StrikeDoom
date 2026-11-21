import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_STRIKEDOOM_CHATBOT_GEMINI_API_KEY });

export async function Doomsbot(prompt) {
    const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: prompt,
    config: {
      temperature: 0.7, 
    }
  });
  return response.text
}