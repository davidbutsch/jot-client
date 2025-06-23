import { LocalJotIds } from "@/modules/jots";
import useLocalStorage from "use-local-storage";

export const useSavedJotIds = () => {
  const [savedJotIds, setSavedJotIds] = useLocalStorage<LocalJotIds>(
    "jots",
    {
      home: [],
      shared: [],
      pinned: [],
      published: [],
      recents: [],
    },
    {
      serializer: (data) => JSON.stringify(data),
      parser: (string) => JSON.parse(string),
    }
  );

  const saveNewJotId = (location: keyof LocalJotIds, jotId: string) => {
    const updatedLocalJots = {
      ...savedJotIds,
      [location]: [...savedJotIds[location], jotId],
    };

    setSavedJotIds(updatedLocalJots);
  };

  return { savedJotIds, saveNewJotId };
};
