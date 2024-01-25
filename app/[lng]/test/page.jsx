import { writeFile } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';

export default function ServerUploadPage() {
  async function upload(data) {
    'use server';

    const file = data.get('file');
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const mainImage = sharp(buffer);

    // Add a watermark to the image
    const watermarkPath = './public/logo.png';
    const watermark = sharp(watermarkPath);

    // Resize the watermark image to fit within the main image dimensions
    const mainImageMetadata = await mainImage.metadata();
    const watermarkResized = await watermark.resize({
      width: 55, // Adjust the size as needed
      height: 50,
      fit: sharp.fit.inside,
    }).toBuffer();

    // Calculate the position for bottom right corner
    const positionX = parseInt(mainImageMetadata.width) - 55;
    const positionY = parseInt(mainImageMetadata.height) - 50;

    // Composite the resized watermark onto the main image at the calculated position
    const resized = await mainImage
      .composite([
        {
          input: watermarkResized,
          top: positionY,
          left: positionX,
          gravity: 'northwest',
        },
      ])
      .toBuffer();

    // Save the watermarked image to the filesystem in a new location
    const outputPath = join('public', 'upload', file.name);
    await writeFile(outputPath, resized);
    console.log(`Image saved to: ${outputPath}`);

    return { success: true };
  }

  return (
    <main className='h-screen w-full flex flex-col items-center justify-center'>
      <h1>React Server Component: Upload</h1>
      <form action={upload}>
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
    </main>
  );
}
