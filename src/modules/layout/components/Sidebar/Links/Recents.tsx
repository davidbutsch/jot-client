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

export const Recents = () => {
  // STATE
  const {
    localJots: { recents },
  } = useLocalJots();

  // Only open recents by default if there are recent jots
  const [open, setOpen] = useState(recents.length > 0);

  // METHODS
  const handleToggleOpen = () => {
    setOpen((previous) => !previous);
  };

  return (
    <>
      <ListItemButton onClick={handleToggleOpen}>
        <ListItemIcon>
          <Icon className="material-symbols-outlined" color="primary">
            schedule
          </Icon>
        </ListItemIcon>
        <ListItemText primary="Recents" />
        {open ? (
          <Icon className="material-symbols-outlined">arrow_drop_up</Icon>
        ) : (
          <Icon className="material-symbols-outlined">arrow_drop_down</Icon>
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" dense>
          {recents.map((jot, i) => (
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
