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

  type AddJotIdOptions = {
    maxLength?: number;
  };

  const addJotId = (
    location: keyof SavedJotIds,
    jotId: string,
    options?: AddJotIdOptions
  ) => {
    const updatedLocalJots = {
      ...savedJotIds,
      [location]: [
        jotId,
        ...savedJotIds[location].filter((id) => id !== jotId),
      ],
    };

    if (
      options?.maxLength &&
      updatedLocalJots[location].length > options?.maxLength
    )
      updatedLocalJots[location].length = options.maxLength;

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
