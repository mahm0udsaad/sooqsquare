'use server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

function extractFilePath(filePath) {
  // Split the file path by backslashes
  const parts = filePath.split('\\');
  return parts[parts.length - 1];
}

export default async function upload(data) {

    const file= data.get('file')
    const description = data.get('description');
    const brand = data.get('brand');
    const category = data.get('category');
    const adType = data.get('adType');
    const model = data.get('model');
    const year = data.get('year');
    const carType = data.get('carType');
    const carStatus = data.get('carStatus');
    const transmission = data.get('transmission');
    const fuelType = data.get('fuelType');
    const meterRange = data.get('meterRange');

  
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    let path = join(process.cwd(), 'public', 'ar', 'upload', file.name);
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)
    path = extractFilePath(path)
    const imagePath = `/upload/${path}` 
    console.log(
      {
        imagePath,
        description,
        brand,
        category,
        adType,
        model,
        year,
        carType,
        carStatus,
        transmission,
        fuelType,
        meterRange,
      }
    );
  }