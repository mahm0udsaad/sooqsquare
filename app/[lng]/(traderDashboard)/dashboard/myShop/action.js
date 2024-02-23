"use server";
import client from "@/lib/cloud";

export default async function upload(data) {
  const imageFile = await data.get("file");

  if (!imageFile) {
    console.error("No image file provided for upload");
    return null;
  }

  const imageBytes = await imageFile.arrayBuffer();
  const imageBuffer = Buffer.from(imageBytes);

  try {
    await client.writeFile(
      `/upload/${imageFile.name}`,
      imageBuffer,
      "buffer",
      (err) => {
        if (err) {
          console.error("Error writing the image " + err);
        } else {
          console.log("Image uploaded successfully");
        }
      }
    );

    const imageUrl = `https://cloud.sooqsquare.com/apps/sharingpath/nextcloud/upload/${encodeURIComponent(
      imageFile.name
    )}`;

    return { adImage: imageUrl };
  } catch (error) {
    console.error("Error uploading the image:", error);
    return null;
  }
}
