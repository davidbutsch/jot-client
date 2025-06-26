import { env } from "@/common";

export const createJotInviteCode = async (jotId: string): Promise<string> => {
  const response = await fetch(`${env.API_URL}/jots/${jotId}/invite-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body);
  }

  const code: string = body;
  return code;
};
