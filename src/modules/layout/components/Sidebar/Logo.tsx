import { Box } from "@mui/material";

export const Logo = () => {
  return (
    <Box
      component="img"
      src="jot.svg"
      height={40}
      width="fit-content"
      pl={2} // aligns logo image with action and navigation buttons
      mb={2}
    />
  );
};
