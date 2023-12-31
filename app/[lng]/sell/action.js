'use server'
// Import createAd from prisma/actions
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { createAd } from '../../../prisma/actions';
import { redirect } from 'next/navigation';

// Function to extract file path
function extractFilePath(filePath) {
  const parts = filePath.split('\\');
  return parts[parts.length - 1];
}

export default async function upload(data) {
  const file = data.get('file');
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
  const userId = data.get('userId');

  try {
    if (!file) {
      throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let path = join(process.cwd(), 'tmp', file.name);
    await writeFile(path, buffer);
    console.log(`Open ${path} to see the uploaded file`);
    path = extractFilePath(path);
    const adImage = `/upload/${path}`;
    const adData = {
      adImage,
      description,
      brand,
      category,
      adType:"buy",
      model,
      year:2024,
      carType,
      carStatus,
      transmission,
      fuelType,
      meterRange,
    };

    // Create the ad
    const createdAd = await createAd(adData, userId);
    // Return success message or data
    return { success: true, data: createdAd };
  } catch (error) {
    // Return error message
    return { success: false, error: error.message };
  }finally{
    redirect('/myAds')
  }
}




