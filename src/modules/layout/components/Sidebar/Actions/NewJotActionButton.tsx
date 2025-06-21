import { NewJotDialog } from "@/modules/jots/components";
import { Icon, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { ActionButton } from "./ActionButton";

export const NewJotActionButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);

  return (
    <>
      <NewJotDialog open={dialogOpen} setOpen={setDialogOpen} />
      <ActionButton onClick={handleOpenDialog}>
        <ListItemIcon>
          <Icon className="material-symbols-outlined">add</Icon>
        </ListItemIcon>
        <ListItemText sx={{ "*": { fontWeight: "bold !important" } }}>
          New Jot
        </ListItemText>
      </ActionButton>
    </>
  );
};
