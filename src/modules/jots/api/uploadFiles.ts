import { env } from "@/common";

type UploadedFile = {
  originalname: string;
  mimetype: string;
  key: string;
};

export const uploadFiles = async (files: File[]): Promise<UploadedFile[]> => {
  const formData = new FormData();

  files.forEach((file) => formData.append("files", file));

  const response = await fetch(`${env.API_URL}/uploads/`, {
    method: "POST",
    body: formData,
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body);
  }

  const uploadedFiles: UploadedFile[] = body;
  return uploadedFiles;
};
