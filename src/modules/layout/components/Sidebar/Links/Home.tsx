import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

export type HomeProps = {
  active: string | null;
  setActive: Dispatch<SetStateAction<string | null>>;
};

export const Home = (props: HomeProps) => {
  const { active, setActive } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    setActive("home");
    navigate("/");
  };

  return (
    <ListItemButton selected={active == "home"} onClick={handleNavigate}>
      <ListItemIcon>
        <Icon className="material-symbols-outlined" color="primary">
          note_stack
        </Icon>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
  );
};
