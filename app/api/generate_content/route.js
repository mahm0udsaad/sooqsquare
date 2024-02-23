import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req) {
  // Extract the `prompt` from the body of the request
  const { carIformation, lng } = await req.json();
  const geminiStream = await genAI
    .getGenerativeModel({ model: "gemini-pro" })
    .generateContent([
      `you are an copy writer write an eye catching and SEO friendley description we excepect a profisional description
       not only returning the details talk about the ad like you are a profisnal seller about this car in ${lng} language`,
      carIformation,
    ]);
  // Convert the response into a friendly text-stream
  return Response.json({
    generated_content:
      geminiStream.response.candidates[0].content.parts[0].text,
  });
}
