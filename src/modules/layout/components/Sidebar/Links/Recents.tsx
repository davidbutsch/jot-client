import { getRecents } from "@/modules/layout";
import {
  CircularProgress,
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Recents = () => {
  // STATE
  const [open, setOpen] = useState(true);

  // API
  const { data: recents, isLoading } = useQuery({
    queryKey: ["recents"],
    queryFn: getRecents,
  });

  // METHODS
  const handleToggleOpen = () => {
    setOpen((previous) => !previous);
  };

  return (
    <>
      <ListItemButton onClick={handleToggleOpen}>
        <ListItemIcon>
          <Icon className="material-symbols-outlined">schedule</Icon>
        </ListItemIcon>
        <ListItemText primary="Recents" />
        {open ? (
          isLoading ? (
            <CircularProgress size={24} />
          ) : (
            <Icon className="material-symbols-outlined">arrow_drop_up</Icon>
          )
        ) : (
          <Icon className="material-symbols-outlined">arrow_drop_down</Icon>
        )}
      </ListItemButton>
      <Collapse in={open && !isLoading} timeout="auto" unmountOnExit>
        <List component="div" dense>
          {recents?.map((recent, i) => (
            <Slide in={open} direction="right" timeout={(i + 1) * 100}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={recent.name} />
              </ListItemButton>
            </Slide>
          ))}
        </List>
      </Collapse>
    </>
  );
};
