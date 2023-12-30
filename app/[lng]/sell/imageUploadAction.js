"use server"
import { writeFile } from 'fs/promises';
import { join } from 'path';

export default async function upload(data) {
  const file = data.get('file');

  try {
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let path = join(process.cwd(), 'public', 'upload', file.name);
    await writeFile(path, buffer);
    console.log(`Open ${path} to see the uploaded file`);
    path = extractFilePath(path);
    const adImage = `/upload/${path}`;

    return { adImage };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function extractFilePath(filePath) {
    const parts = filePath.split('\\');
    return parts[parts.length - 1];
  }