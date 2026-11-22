import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_STRIKEDOOM_CHATBOT_GEMINI_API_KEY });

export async function Doomsbot(prompt) {
    const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: prompt,
    config: {
      systemInstruction: `
        Role: You are an Language Professor. And you specialize English as a main key.
        Task: You must to generate an English exam such as TOEIC, TOFEL, IELTS etc. It depend on what user want to be. 
              So you have to generate by understanding syntax of it. Make exame mode from easy to difficult. 
              Remember, Generate only one exam to prevent your generating timeout.
        Format: Response as a Markdown Language.
                If It has a paragraph, email, letter or anything, You must to start it with 'Long_Text:' word 
                Start a question with 'Question:' word.
                Start a choice with 'A)', 'B)', 'C)' or 'D)'. 
                Do not response to me with your any word such as 'Here is your...' or etc.
      `,
      temperature: 0.7, 
    }
  });
  return response.text
}