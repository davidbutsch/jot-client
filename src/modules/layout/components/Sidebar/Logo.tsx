import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <Box
      component="img"
      src="jot.svg"
      onClick={handleClick}
      sx={{
        pl: 2, // aligns logo image with action and navigation buttons
        mb: 2,

        height: 40,
        width: "fit-content",

        cursor: "pointer",
      }}
    />
  );
};
