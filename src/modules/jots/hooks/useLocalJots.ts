import { Jot, LocalJots } from "@/modules/jots";
import useLocalStorage from "use-local-storage";

export const useLocalJots = () => {
  const [localJots, setLocalJots] = useLocalStorage<LocalJots>(
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

  const addLocalJot = (location: keyof LocalJots, jot: Jot) => {
    const updatedLocalJots = {
      ...localJots,
      [location]: [...localJots[location], jot],
    };

    setLocalJots(updatedLocalJots);
  };

  return { localJots, addLocalJot };
};
