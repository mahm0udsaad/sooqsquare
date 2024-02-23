import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req) {
  // Extract the `prompt` from the body of the request
  const { image_data } = await req.json();
  console.log(image_data);
  const geminiStream = await genAI
    .getGenerativeModel({
      model: "gemini-pro-vision",
    })
    .generateContent([
      `read 4 colors in this image for creating it's ad card to be suitable for this image 
      we need bgColor , textColor , chatBtnBg , callBtnBg then return a json object  also return 
      a mouse postion {x , y } for each color you picked`,
      image_data,
    ]);

  console.log(geminiStream.response.candidates[0].content.parts[0].text);
  // Convert the response into a friendly text-stream
  return Response.json({
    generated_content:
      geminiStream.response.candidates[0].content.parts[0].text,
  });
}
