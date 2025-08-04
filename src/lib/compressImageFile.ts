// src/lib/functions/compressImageFile.ts

export async function compressImageFile(file: File, maxWidth = 800, quality = 0.7): Promise<File> {
  const image = new Image();
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      if (!event.target?.result) return reject("No file data");

      image.src = event.target.result as string;
    };

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = Math.min(maxWidth / image.width, 1);
      const width = image.width * scale;
      const height = image.height * scale;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("No canvas context");

      ctx.drawImage(image, 0, 0, width, height);

      canvas.toBlob((blob) => {
        if (blob) {
          const compressedFile = new File([blob], file.name, { type: "image/jpeg" });
          resolve(compressedFile);
        } else {
          reject("Blob creation failed");
        }
      }, "image/jpeg", quality);
    };

    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
