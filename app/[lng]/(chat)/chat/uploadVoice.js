"use server";
import client from "../../../../lib/cloud";

export default async function uploadVoice(base64Data) {
  try {
    // Read the blob data as an ArrayBuffer
    const arrayBuffer = Buffer.from(base64Data, "base64");
    // Create a destination path with appropriate filename (replace with your logic)
    const destinationPath = `/records/${base64Data.length}.mp3`;
    // Write the audio data to Nextcloud using client.writeFile
    await client.writeFile(destinationPath, arrayBuffer, {
      contentType: "audio/mp3",
    });
    console.log("Audio uploaded successfully!");
    const VoiceUrl = `https://cloud.sooqsquare.com/apps/sharingpath/nextcloud/records/${base64Data.length}.mp3`;
    return VoiceUrl;
  } catch (error) {
    console.error(`Upload failed: ${error.message}`);
  }
}
