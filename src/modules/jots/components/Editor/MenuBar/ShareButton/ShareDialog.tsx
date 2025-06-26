import { Jot } from "@/modules/jots/types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { InviteCode } from "./InviteCode";

export type ShareDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  jot: Jot;
};

export const ShareDialog = (props: ShareDialogProps) => {
  const { open, setOpen, jot } = props;

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Share Jot</DialogTitle>
      <DialogContent>
        <DialogContentText mb={4}>
          Invite codes let you share jots with others for 24 hours.
        </DialogContentText>
        <InviteCode jot={jot} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
