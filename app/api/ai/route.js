import { NextResponse } from "next/server";

export async function POST(req) {
  // Extract the `prompt` from the body of the request
  const response = await req.json();

  console.log(response);
  // Respond with the stream
  return NextResponse.json({ message: response.message }, { status: 200 });
}
