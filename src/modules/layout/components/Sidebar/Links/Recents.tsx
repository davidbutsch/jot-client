import { useSavedJotIds } from "@/modules/jots/hooks";
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
import { JotListItemButton } from "./JotListItemButton";

export const Recents = () => {
  // STATE
  const {
    savedJotIds: { recents },
  } = useSavedJotIds();

  // Only open recents by default if there are recent jots
  const [open, setOpen] = useState(true);

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
          {recents.map((recentJotId, i) => (
            <Slide
              key={recentJotId}
              in={open}
              direction="right"
              timeout={(i + 1) * 100}
            >
              <div>
                <JotListItemButton jotId={recentJotId} category={"recents"} />
              </div>
            </Slide>
          ))}
        </List>
      </Collapse>
    </>
  );
};
