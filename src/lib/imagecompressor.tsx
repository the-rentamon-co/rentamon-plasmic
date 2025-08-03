

import imageCompression from 'browser-image-compression';


/**
 * Converts raw or prefixed base64 string to a JPEG File
 */
function rawBase64ToFile(base64: string, filename = 'image.jpg'): File {
  let mime = 'image/jpeg';
  let base64Data = base64;


  // Add data header if missing
  if (!base64.startsWith('data:')) {
    base64Data = `data:${mime};base64,${base64}`;
  }


  const [header, data] = base64Data.split(',');
  const mimeMatch = header.match(/:(.*?);/);
  if (!mimeMatch) throw new Error('Invalid base64 string: cannot extract MIME type');


  mime = mimeMatch[1];
  const binary = atob(data);
  const u8arr = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    u8arr[i] = binary.charCodeAt(i);
  }


  return new File([u8arr], filename, { type: mime });
}


/**
 * Compress a base64 image and return the raw base64 string (no data URL header)
 *
 * @param input_base64string - Raw or prefixed base64 image string
 * @param quality - Desired max size in MB (e.g., 0.2 for ~200KB)
 * @returns Raw base64 string of the compressed image
 */
export async function processAndCompressBase64(input_base64string: string, quality: number): Promise<string> {
  try {
    const imageFile = rawBase64ToFile(input_base64string);


    const options = {
      maxSizeMB: quality,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };


    const compressedFile = await imageCompression(imageFile, options);
    const compressedWithHeader = await imageCompression.getDataUrlFromFile(compressedFile);


    const [, rawCompressedBase64] = compressedWithHeader.split(',');
    return rawCompressedBase64;
  } catch (error) {
    console.error('Image processing failed:', error);
    throw new Error('Failed to process and compress image');
  }
}


/**
 * Compress multiple base64 images and return an array of compressed raw base64 strings
 *
 * @param input_base64strings - Array of raw or prefixed base64 strings
 * @param quality - Desired max size in MB for each image
 * @returns Array of raw base64 compressed strings
 */
export async function processAndCompressMultipleBase64(
  input_base64strings: string[],
  quality: number
): Promise<string[]> {
  const results: string[] = [];


  for (const base64 of input_base64strings) {
    const compressed = await processAndCompressBase64(base64, quality);
    results.push(compressed);
  }


  return results;
}
