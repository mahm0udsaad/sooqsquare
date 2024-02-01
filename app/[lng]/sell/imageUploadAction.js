"use server"
import sharp from "sharp";
import { createAdapter  } from "webdav-fs";
const username = 'mahm0ud';
const password = 'dbEMY-soQg6-JKq4H-4S832-MRSPN';
const remotePath = `https://cloud.elsewedy-automation.com/nextcloud/remote.php/dav/files/${username}`;

export default async function upload(data) {
  const imageFile = await data.get('file');

  if (!imageFile) {
    console.error('No image file provided for upload');
    return null;
  }

  // Sharp functionality
  const imageBytes = await imageFile.arrayBuffer();
  const imageBuffer = Buffer.from(imageBytes);

  const mainImage = sharp(imageBuffer);

  // Add a watermark to the image
  const watermarkPath = './public/Logo.png';
  const watermark = sharp(watermarkPath);

  // Resize the watermark image to fit within the main image dimensions
  const mainImageMetadata = await mainImage.metadata();
  const watermarkResized = await watermark.resize({
    width: 65, // Adjust the size as needed
    height: 60,
    fit: sharp.fit.inside,
  }).toBuffer();

  // Calculate the position for bottom right corner
  const positionX = parseInt(mainImageMetadata.width) - 75;
  const positionY = parseInt(mainImageMetadata.height) - 30;

  console.log(positionX, positionY);
  // Composite the resized watermark onto the main image at the calculated position
  const resizedImageBuffer = await mainImage
    .composite([
      {
        input: watermarkResized,
        top: positionY,
        left: positionX,
        gravity: 'northwest',
      },
    ])
    .toFormat('jpeg', { mozjpeg: true })
    .toBuffer();

  // Upload the watermarked and resized image to the remote file system
  const client = createAdapter(remotePath, {
    username,
    password,
  });

  try {
    await client.writeFile(`/upload/${imageFile.name}`, resizedImageBuffer, 'buffer', (err) => {
      if (err) {
        console.error("Error writing the image " + err);
      } else {
        console.log("Image uploaded successfully");
      }
    });

    const imageUrl = `https://cloud.elsewedy-automation.com/nextcloud/apps/sharingpath/mahm0ud/upload/${encodeURIComponent(imageFile.name)}`;
    console.log(imageUrl);
    return { adImage: imageUrl };
  } catch (error) {
    console.error('Error uploading the image:', error);
    return null;
  }
}  



