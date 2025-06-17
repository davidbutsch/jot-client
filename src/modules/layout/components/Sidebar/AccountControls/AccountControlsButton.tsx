import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import useLocalStorage from "use-local-storage";
import { AccountAvatar } from "./AccountAvatar";

export type AccountControlsButtonProps = {
  handleClick: () => any;
};

export const AccountControlsButton = (props: AccountControlsButtonProps) => {
  const { handleClick } = props;

  const [localName] = useLocalStorage("name", "");

  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        outline: "1px solid",
        outlineColor: "divider",
        outlineRadius: 1,
      }}
    >
      <ListItemIcon>
        <AccountAvatar />
      </ListItemIcon>
      <ListItemText
        primary={localName}
        secondary={"Local account"}
        slotProps={{
          primary: {
            style: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          },
          secondary: {
            variant: "caption",
            style: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          },
        }}
      />
      <Icon
        className="material-symbols-outlined"
        sx={{
          ml: 1,
        }}
      >
        chevron_right
      </Icon>
    </ListItemButton>
  );
};
