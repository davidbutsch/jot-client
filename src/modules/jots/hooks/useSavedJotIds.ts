import { SavedJotIds } from "@/modules/jots";
import useLocalStorage from "use-local-storage";

export const useSavedJotIds = () => {
  const [savedJotIds, setSavedJotIds] = useLocalStorage<SavedJotIds>(
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

  const addJotId = (location: keyof SavedJotIds, jotId: string) => {
    const updatedLocalJots = {
      ...savedJotIds,
      [location]: [...savedJotIds[location], jotId],
    };

    setSavedJotIds(updatedLocalJots);
  };

  const deleteJotId = (location: keyof SavedJotIds, jotId: string) => {
    const updatedLocalJots = {
      ...savedJotIds,
      [location]: [...savedJotIds[location].filter((id) => id !== jotId)],
    };

    setSavedJotIds(updatedLocalJots);
  };

  return { savedJotIds, addJotId, deleteJotId };
};
