"use server";

export const uploadToCloudinary = async (
  file: File
): Promise<string | null> => {
  if (!file) return null;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ImageUpload"); // Replace with your preset

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dogemgxf1/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Image upload failed");
  }

  return data.secure_url || null; // Return the uploaded image URL
};
