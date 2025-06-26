import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

export type SharedProps = {
  active: string | null;
  setActive: Dispatch<SetStateAction<string | null>>;
};

export const Shared = (props: SharedProps) => {
  const { active, setActive } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    setActive("shared");
    navigate("/shared/");
  };

  return (
    <ListItemButton selected={active == "shared"} onClick={handleNavigate}>
      <ListItemIcon>
        <Icon className="material-symbols-outlined" color="primary">
          group
        </Icon>
      </ListItemIcon>
      <ListItemText primary="Shared" />
    </ListItemButton>
  );
};
