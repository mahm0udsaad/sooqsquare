"use server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function aiRes(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt, {
    prompt: {
      text: "you are an assistant in sooqsquare website wich is 4 squares each one represent a bussniss we work in cars , appartments , jobs",
    },
  });
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
