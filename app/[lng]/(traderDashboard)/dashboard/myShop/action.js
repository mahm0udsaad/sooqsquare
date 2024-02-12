"use server"
import { createAdapter  } from "webdav-fs";
const username = 'nextcloud';
const password = 'AdycJ-35aaF-yRbrc-cPYbk-xEJF9';
const remotePath = `https://cloud.sooqsquare.com/nextcloud/remote.php/dav/files/${username}`;


export default async function upload(data) {
  const imageFile = await data.get('file');

  if (!imageFile) {
    console.error('No image file provided for upload');
    return null;
  }

  const imageBytes = await imageFile.arrayBuffer();
  const imageBuffer = Buffer.from(imageBytes);

  const client = createAdapter(remotePath, {
    username,
    password,
  });

  try {
    await client.writeFile(`/upload/${imageFile.name}`, imageBuffer, 'buffer', (err) => {
      if (err) {
        console.error("Error writing the image " + err);
      } else {
        console.log("Image uploaded successfully");
      }
    });

    const imageUrl = `https://cloud.sooqsquare.com/nextcloud/apps/sharingpath/nextcloud/upload/${encodeURIComponent(imageFile.name)}`;
    console.log(imageUrl);
    return { adImage: imageUrl };
  } catch (error) {
    console.error('Error uploading the image:', error);
    return null;
  }
}  
