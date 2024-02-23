import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => {
  return {
    contents: messages
      .filter(
        (message) => message.role === "user" || message.role === "assistant"
      )
      .map((message) => ({
        role: message.role === "user" ? "user" : "model",
        parts: [
          { text: message.content },
          {
            text: `you are an assistant in sooqsquare.com website helping vistors to understand our services like buy or sell cars , appartemnts , find job 
            we are exist in arabic countries only and we provide solution for managing profile , creating shop to display your ads in diffrent way , creating company to display you jobs , 
            we use ai in many aspect in our app you are so polite friendly `,
          },
        ],
      })),
  };
};

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();

  const geminiStream = await genAI
    .getGenerativeModel({ model: "gemini-pro" })
    .generateContentStream(buildGoogleGenAIPrompt(messages));

  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(geminiStream);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
