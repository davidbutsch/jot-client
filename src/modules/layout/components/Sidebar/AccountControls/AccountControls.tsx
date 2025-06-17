import { Box, styled } from "@mui/material";
import { useState } from "react";
import { AccountControlsButton } from "./AccountControlsButton";
import { AccountControlsDialog } from "./AccountControlsDialog";

const AccountControlsContainer = styled(Box)({
  height: "100%",

  display: "flex",
  alignItems: "end",
});

export const AccountControls = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  return (
    <AccountControlsContainer>
      <AccountControlsButton handleClick={handleClick} />
      <AccountControlsDialog open={open} setOpen={setOpen} />
    </AccountControlsContainer>
  );
};
