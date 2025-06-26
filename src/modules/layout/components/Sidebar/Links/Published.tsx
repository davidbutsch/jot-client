import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

export type PublishedProps = {
  active: string | null;
  setActive: Dispatch<SetStateAction<string | null>>;
};

export const Published = (props: PublishedProps) => {
  const { active, setActive } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    setActive("published");
    navigate("/published/");
  };

  return (
    <ListItemButton selected={active == "published"} onClick={handleNavigate}>
      <ListItemIcon>
        <Icon className="material-symbols-outlined" color="primary">
          web
        </Icon>
      </ListItemIcon>
      <ListItemText primary="Published" />
    </ListItemButton>
  );
};
