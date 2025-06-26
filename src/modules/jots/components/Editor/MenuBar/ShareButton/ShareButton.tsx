import { Jot } from "@/modules/jots/types";
import { Button, Icon } from "@mui/material";
import { useState } from "react";
import { ShareDialog } from "./ShareDialog";

export type ShareButtonProps = {
  jot: Jot;
};

export const ShareButton = (props: ShareButtonProps) => {
  const { jot } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<Icon className="material-symbols-outlined">group</Icon>}
        sx={{
          flexGrow: 1,
        }}
        onClick={handleOpenDialog}
      >
        Share
      </Button>
      <ShareDialog open={dialogOpen} setOpen={setDialogOpen} jot={jot} />
    </>
  );
};
