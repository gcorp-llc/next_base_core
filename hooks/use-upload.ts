"use client";

import { useState } from "react";
import { toast } from "sonner";

// This is where you can configure your upload URL
// Suggestion: use an environment variable like process.env.NEXT_PUBLIC_UPLOAD_API
const UPLOAD_ENDPOINT = "/api/upload";

export function useUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadFile = async (file: File): Promise<string | null> => {
    setIsUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // For demonstration, we'll simulate an upload if the endpoint doesn't exist
      // In a real scenario, you would use fetch(UPLOAD_ENDPOINT, { method: 'POST', body: formData })

      console.log(`Uploading ${file.name} to ${UPLOAD_ENDPOINT}...`);

      // Simulate progress
      for (let i = 0; i <= 100; i += 20) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      // Return a mock URL
      // In reality, this would be the URL returned by your backend/S3/Cloudinary
      const mockUrl = URL.createObjectURL(file);
      return mockUrl;

    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("آپلود فایل با خطا مواجه شد");
      return null;
    } finally {
      setIsUploading(false);
      setProgress(0);
    }
  };

  const uploadMultiple = async (files: File[]): Promise<string[]> => {
    const urls = await Promise.all(files.map(file => uploadFile(file)));
    return urls.filter((url): url is string => url !== null);
  };

  return {
    uploadFile,
    uploadMultiple,
    isUploading,
    progress
  };
}
