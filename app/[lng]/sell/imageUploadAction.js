import { createClient } from 'webdav';
import { getCurrentUser } from '@nextcloud/auth';
import { generateRemoteUrl } from '@nextcloud/router';

export default async function upload(data) {
  const imageFile = await data.get('file');

  if (!imageFile) {
    console.error('No image file provided for upload');
    return null; // Or handle the error accordingly
  }

  const username = 'mahm0ud';
  const password = 'dbEMY-soQg6-JKq4H-4S832-MRSPN';
  const baseUrl = "https://cloud.elsewedy-automation.com/nextcloud/apps/files/files/214?dir=/upload";
  const userUrl = `/files/${username}/upload`;
  const remotePath =`https://cloud.elsewedy-automation.com/nextcloud/remote.php/dav/files/${username}`;

  const client = createClient(remotePath, {
    username,
    password,
  });

  const imageBytes = await imageFile.arrayBuffer();
  const imageBuffer = Buffer.from(imageBytes);
  console.log(client);
  try {
    await client.putFileContents("/upload", imageBuffer, {
      headers: {
        'Content-Type': imageFile.type,
      },
    });

    const imageUrl = `${remotePath}/upload/${imageFile.name}`
    console.log('Image uploaded successfully:', imageUrl);
    return imageUrl;
  } catch (error) {
    console.error('Error uploading the image:', error);
    return "example.com";
  }
}
