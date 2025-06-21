import { Box, styled } from "@mui/material";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { AccountControlsButton } from "./AccountControlsButton";
import { AccountControlsDialog } from "./AccountControlsDialog";

const AccountControlsContainer = styled(Box)({
  height: "100%",

  display: "flex",
  alignItems: "end",
});

export const AccountControls = () => {
  const [open, setOpen] = useState(false);
  const [name] = useLocalStorage("name", "");

  const handleClick = () => setOpen(true);

  if (!name) return;

  return (
    <AccountControlsContainer>
      <AccountControlsButton handleClick={handleClick} />
      <AccountControlsDialog open={open} setOpen={setOpen} />
    </AccountControlsContainer>
  );
};
