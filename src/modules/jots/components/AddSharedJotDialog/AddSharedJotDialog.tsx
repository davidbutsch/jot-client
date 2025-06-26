import { getJotIdFromInviteCode } from "@/modules/jots/api";
import { isCharDigit } from "@/modules/jots/helpers";
import { useSavedJotIds } from "@/modules/jots/hooks";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type AddSharedJotDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddSharedJotDialog = (props: AddSharedJotDialogProps) => {
  const { open, setOpen } = props;

  const navigate = useNavigate();

  // State
  const [code, setCode] = useState("");
  const { addJotId } = useSavedJotIds();

  // Api
  const getJotIdFromInviteCodeQuery = useQuery({
    queryKey: ["invite-codes", code],
    queryFn: () => getJotIdFromInviteCode(code),
    enabled: code.length == 6,
  });
  const jotId = getJotIdFromInviteCodeQuery.data;
  const isLoading = getJotIdFromInviteCodeQuery.isLoading;

  const handleCodeChange = (value: string) => setCode(value);

  const handleDialogClose = () => setOpen(false);

  const handleAddJot = async () => {
    if (!jotId) return;

    // Save jot to shared
    addJotId("shared", jotId);

    // Close dialog
    setOpen(false);

    // Navigate to Jot page
    navigate(`/${jotId}`);
  };

  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>Join Shared Jot</DialogTitle>
      <DialogContent>
        <MuiOtpInput
          value={code}
          onChange={handleCodeChange}
          validateChar={(value: string) => {
            return isCharDigit(value);
          }}
          autoFocus
          length={6}
          TextFieldsProps={{
            slotProps: {
              input: { sx: { height: 64 } },
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button
          onClick={handleAddJot}
          disabled={!jotId}
          loading={isLoading}
          variant="contained"
        >
          Join
        </Button>
      </DialogActions>
    </Dialog>
  );
};
