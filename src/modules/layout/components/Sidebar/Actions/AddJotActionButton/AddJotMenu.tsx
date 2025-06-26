import { Menu } from "@mui/material";
import { AddSharedJotMenuItem } from "./AddSharedJotMenuItem";
import { CreateNewJotMenuItem } from "./CreateNewJotMenuItem";

export type AddJotMenuProps = {
  anchorEl: HTMLElement | null;
  handleClose: () => any;
};

export const AddJotMenu = (props: AddJotMenuProps) => {
  const { anchorEl, handleClose } = props;

  const open = Boolean(anchorEl);

  return (
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      <CreateNewJotMenuItem />
      <AddSharedJotMenuItem />
    </Menu>
  );
};
