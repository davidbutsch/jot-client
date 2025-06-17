import { Drawer } from "@mui/material";
import { AccountControls } from "./AccountControls";
import { Actions } from "./Actions";
import { Links } from "./Links";
import { Logo } from "./Logo";

export const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      ModalProps={{
        keepMounted: true,
      }}
      open
      slotProps={{
        paper: {
          sx: {
            p: 2,
            pt: 4,
            width: "240px",
            gap: 2,
          },
        },
      }}
    >
      <Logo />
      <Actions />
      <Links />
      <AccountControls />
    </Drawer>
  );
};
