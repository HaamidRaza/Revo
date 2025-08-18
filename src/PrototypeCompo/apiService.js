export const callGeminiAPI = async (prompt) => {
  const chatHistory = [];
  chatHistory.push({ role: "user", parts: [{ text: prompt }] });
  const payload = { contents: chatHistory };
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY_HERE";
  
  if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY_HERE") {
    throw new Error("Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file or update apiService.js");
  }
  
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (
    result.candidates &&
    result.candidates.length > 0 &&
    result.candidates[0].content &&
    result.candidates[0].content.parts &&
    result.candidates[0].content.parts.length > 0
  ) {
    return result.candidates[0].content.parts[0].text;
  } else {
    throw new Error("Failed to get a response from the API.");
  }
};