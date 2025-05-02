export type Recent = {
  name: string;
};

export type GetRecentsResponse = Recent[];

export const getRecents = async (): Promise<GetRecentsResponse> => {
  // const result = await fetch();
  // return result.json();

  // sleep 1s
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [{ name: "chem review" }, { name: "Shopping" }, { name: "temp" }];
};
