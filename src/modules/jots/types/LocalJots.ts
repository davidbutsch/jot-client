import { Jot } from "./Jot";

// Todo: type out LocalJot (thumbnail, last updated, etc)
export type LocalJot = Jot;

export type LocalJots = {
  home: Jot[];
  shared: Jot[];
  pinned: Jot[];
  published: Jot[];
  recents: Jot[];
};
