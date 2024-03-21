import { updateUserStatus } from "@/prisma/actions";

export async function POST(req) {
  // Extract the user ID and status from the request body
  const body = await req.json();

  // Extract the user ID and status from the request body
  const { userId, status } = body;
  try {
    // Update the user status in the database
    await updateUserStatus(userId, status);

    // Respond with a success message
    return Response.json({
      message: "User status updated successfully",
    });
  } catch (error) {
    console.error("Error updating user status:", error);

    // Respond with an error message
    return Response.json({
      error: "Failed to update user status",
    });
  }
}
