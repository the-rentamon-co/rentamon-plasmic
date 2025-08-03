import React, { useState } from "react";
import axios from "axios";
import { fileToBase64, processAndCompressBase64 } from "../lib/imagecompressor";

export function CompressedUploadRequest() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus("فایلی انتخاب نشده");
      return;
    }

    try {
      setStatus("در حال فشرده‌سازی...");
      const base64 = await fileToBase64(file);
      const compressed = await processAndCompressBase64(base64, 0.7);

      setStatus("در حال ارسال به سرور...");
      const response = await axios.post("https://YOUR-N8N-ENDPOINT", {
        prop_id: "1",
        property_pic: compressed,
      });

      setStatus("ارسال موفق! ✅");
    } catch (err) {
      console.error(err);
      setStatus("خطا در آپلود ❌");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload} style={{ marginTop: 10 }}>
        آپلود و ارسال
      </button>
      <div style={{ marginTop: 10 }}>{status}</div>
    </div>
  );
}
