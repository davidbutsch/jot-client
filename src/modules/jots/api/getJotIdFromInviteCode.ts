import { env } from "@/common";

export const getJotIdFromInviteCode = async (
  inviteCode: string
): Promise<string> => {
  const response = await fetch(`${env.API_URL}/jots/?inviteCode=${inviteCode}`);

  const body = await response.json();

  if (!response.ok) throw new Error(body);

  return body;
};
