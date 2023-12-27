'use server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
export default async function upload(data) {

    const file= data.get('file')
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join(process.cwd(), 'public', 'ar', 'upload', file.name);
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    return { path }
  }