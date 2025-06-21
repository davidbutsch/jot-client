import { env } from "@/common";
import { type Jot } from "@/modules/jots";

export const getJot = async (jotId: string): Promise<Jot> => {
  const response = await fetch(`${env.API_URL}/jots/${jotId}`);

  const body = await response.json();

  if (!response.ok) throw new Error(body);

  return body;
};
