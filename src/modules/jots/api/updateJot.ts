import { env } from "@/common";
import { type Jot } from "@/modules/jots";

export type UpdateJotOptions = {
  title?: string;
  html?: string;
};

export const updateJot = async (
  jotId: string,
  options: UpdateJotOptions
): Promise<Jot> => {
  const response = await fetch(`${env.API_URL}/jots/${jotId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: options.title, html: options.html }),
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body);
  }

  const data: Jot = body;
  return data;
};
