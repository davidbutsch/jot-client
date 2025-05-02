export type Pin = {
  name: string;
};

export type GetPinnedResponse = Pin[];

export const getPinned = async (): Promise<GetPinnedResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [{ name: "Shopping" }, { name: "Todo" }];
};
