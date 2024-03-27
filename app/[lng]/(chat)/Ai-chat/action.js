const { GoogleGenerativeAI } = require("@google/generative-ai");
import { z } from "zod";
import {
  render,
  getMutableAIState,
  createAI,
  createStreamableValue,
} from "ai/rsc";
import { customAlphabet } from "nanoid";

const provider = new GoogleGenerativeAI(process.env.API_KEY);
let conversationHistory = [];
export const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
); // 7-character random string
async function submitMessage(userInput) {
  conversationHistory.push({ role: "user", content: userInput });
  const response = await render({
    provider: provider,
    model: "gemini-pro", // Replace with the appropriate Gemini model
    messages: conversationHistory,
    text: ({ content }) => <p>{content}</p>,
    tools: {
      get_city_weather: {
        description:
          "Get the current weather for a city ask for parameters if needed",
        parameters: z
          .object({
            city: z.string().describe("the city"),
          })
          .required(),
        render: async function* ({ city }) {
          yield <p className="text-red-500">Fetching weather for {city}...</p>;
          return <p className="text-red-500">Current weather for {city}</p>;
        },
      },
    },
  });

  conversationHistory.push({ role: "system", content: response });
  return response;
}
async function submitUserMessage(content) {
  "use server";

  const aiState = getMutableAIState();

  // Update AI state with new message.
  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: "user",
        content,
      },
    ],
  });
  let textStream;
  let textNode;
  // render() returns a stream of UI components
  const ui = render({
    model: "gemini-pro",
    provider: provider,
    // You may want to construct messages from your AI state
    messages: [
      { role: "system", content: "You are a flight assistant" },
      ...aiState.get().messages.map((message) => ({
        role: message.role,
        content: message.content,
        name: message.name,
      })),
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue("");
        textNode = <p className="text-red-500">{textStream.value}</p>;
      }

      if (done) {
        textStream.done();
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: "assistant",
              content,
            },
          ],
        });
      } else {
        textStream.update(delta);
      }

      return textNode;
    },
  });

  return {
    id: nanoid(),
    display: ui,
  };
}
export const AI = createAI({
  actions: {
    submitUserMessage,
  },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), messages: [] },
});
