import { List } from "@mui/material";
import { useState } from "react";
import { Home } from "./Home";
import { Pinned } from "./Pinned";
import { Published } from "./Published";
import { Recents } from "./Recents";
import { Shared } from "./Shared";

export const Links = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <List component="nav">
      <Home active={active} setActive={setActive} />
      <Shared active={active} setActive={setActive} />
      <Published active={active} setActive={setActive} />
      <Pinned />
      <Recents />
    </List>
  );
};
