import { updateMessageReadStatus } from "@/app/[lng]/(chat)/chat/action";
import { NextResponse } from "next/server";

export async function POST(req) {
  // Extract the user ID and status from the request body
  const body = await req.json();
  const { messageId } = body;

  try {
    // Update the message status in the database
    const updatedMessageId = await updateMessageReadStatus(messageId);

    // Respond with the updated messageId and a status of 200
    return NextResponse.json({ messageId: updatedMessageId }, { status: 200 });
  } catch (error) {
    console.error("Error updating message status:", error);

    // Respond with the error message and a status of 500
    return NextResponse.json(
      { error: "Failed to update message status" },
      { status: 500 }
    );
  }
}
