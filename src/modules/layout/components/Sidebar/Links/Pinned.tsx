import { useLocalJots } from "@/modules/jots/hooks";
import {
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
} from "@mui/material";
import { useState } from "react";

export const Pinned = () => {
  // STATE
  const {
    localJots: { pinned },
  } = useLocalJots();

  // Only open pinned by default if there are pinned jots
  const [open, setOpen] = useState(pinned.length > 0);

  // METHODS
  const handleToggleOpen = () => {
    setOpen((previous) => !previous);
  };

  return (
    <>
      <ListItemButton onClick={handleToggleOpen}>
        <ListItemIcon>
          <Icon className="material-symbols-outlined" color="primary">
            keep
          </Icon>
        </ListItemIcon>
        <ListItemText primary="Pinned" />
        {open ? (
          <Icon className="material-symbols-outlined">arrow_drop_up</Icon>
        ) : (
          <Icon className="material-symbols-outlined">arrow_drop_down</Icon>
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" dense>
          {pinned.map((jot, i) => (
            <Slide in={open} direction="right" timeout={(i + 1) * 100}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={jot.title} />
              </ListItemButton>
            </Slide>
          ))}
        </List>
      </Collapse>
    </>
  );
};
