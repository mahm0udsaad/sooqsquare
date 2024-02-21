import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

// convert messages from the Vercel AI SDK Format to the format
const addIntroMessage = (messages: Message[]) => {
  return [
    {
      role: "assistant",
      content:
        "Hi there! I'm your friendly assistant on Sooq Square, here to help you find what you need.",
    },
    {
      role: "user",
      content: `سوق سكوير (SooqSquare.com) هو منصة إعلانية وتجارية رائدة في الشرق الأوسط وشمال إفريقيا. تأسست في عام 2000، وتهدف إلى توفير منصة سهلة الاستخدام وآمنة وموثوقة للمستخدمين لشراء وبيع وتأجير مجموعة واسعة من المنتجات والخدمات الجديدة والمستعمل.\n\nيقدم سوق سكوير مجموعة واسعة من الفئات، بما في ذلك:\n\n* **الوظيفة:** ابحث عن وظيفة أو نشر إعلانات وظيفة.\n* **السيارات:** بيع وشراء وتأجير السيارات والعثور على قطع غيار وإكسسوارات.\n* **الشقق:** اكتشف العقارات والشقق والمنازل للإيجار والبيع.\n* **الإعلانات:** أنشئ متجركًا عبر الإنترنت أو أنشر إعلانات لمجموعة واسعة من المنتجات.\n* **الإعلانات المبوبة:** انشر إعلانات مصنفة حسب الفئة، مثل الإلكترونيات والأثاث والملابس.\n* **مركز الأعمال:** سجل شركتك وأنشئ ملفًا شخصيًا على الإنترنت واعثر على شركاء أعمال محتملين.\n\nيُعرف سوق سكوير بواجهته سهلة الاستخدام وميزاته الآمنة، مما يجعله منصة موثوقة للمستخدمين للتفاعل مع المشترين والمشترين الآخرين. يتم فحص جميع الإعلانات قبل نشرها لضمان جودتها ومصداقيها.\n\nبالإضافة إلى ذلك، يوفر سوق سكوير خدمات إضافية مثل:\n\n* **دفع آمن:** يوفر بوابة دفع آمنة للمعاملات عبر الإنترنت.\n* **خدمة العملاء:** يقدم فريق دعم مخصص مساعدة ودعمًا للمستخدمين.\n* **التسويق عبر البريد الإلكتروني:** يرسل رسائل بريد إ harapي تلقائية للمشترين والمشترين المحتملين.\n* **إعلانات مميزة:** يوفر خيارات إعلانية متميزة لزيادة ظهور الإعلانات.\n\nيُعرف سوق سكوير على نطاق واسع في المنطقة العربية، حيث يخدم الملايين من المستخدمين ويساعدهم على التواصل مع بعضهم البعض لإجراء معاملات تجارية ناجحة`,
    },
    ...messages,
  ];
};
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: addIntroMessage(messages)
    .filter(
      (message) => message.role === "user" || message.role === "assistant"
    )
    .map((message) => ({
      role: message.role === "user" ? "user" : "model",
      parts: [{ text: message.content }],
    })),
});

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
