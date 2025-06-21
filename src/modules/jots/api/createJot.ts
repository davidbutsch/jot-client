import { env } from "@/common";
import { type Jot } from "@/modules/jots";

export type CreateJotOptions = {
  title: string;
};

export const createJot = async (options: CreateJotOptions): Promise<Jot> => {
  const response = await fetch(`${env.API_URL}/jots/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: options.title }),
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body);
  }

  const data: Jot = body;
  return data;
};
