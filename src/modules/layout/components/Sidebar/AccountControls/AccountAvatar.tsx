import { theme } from "@/theme";
import { Avatar } from "@mui/material";
import useLocalStorage from "use-local-storage";

export const AccountAvatar = () => {
  const [color] = useLocalStorage("color", "#000");

  return (
    <Avatar
      variant="circular"
      sx={{
        height: theme.spacing(6),
        width: theme.spacing(6),

        bgcolor: color,
      }}
    />
  );
};
