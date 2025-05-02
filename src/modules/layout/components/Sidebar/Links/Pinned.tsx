import { getPinned } from "@/modules/layout";
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

export const Pinned = () => {
  // STATE
  const [open, setOpen] = useState(false);

  // API
  const { data: pinned, isLoading } = useQuery({
    queryKey: ["pinned"],
    queryFn: getPinned,
  });

  // METHODS
  const handleToggleOpen = () => {
    setOpen((previous) => !previous);
  };

  return (
    <>
      <ListItemButton onClick={handleToggleOpen}>
        <ListItemIcon>
          <Icon className="material-symbols-outlined">keep</Icon>
        </ListItemIcon>
        <ListItemText primary="Pinned" />
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
          {pinned?.map((pin, i) => (
            <Slide in={open} direction="right" timeout={(i + 1) * 100}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={pin.name} />
              </ListItemButton>
            </Slide>
          ))}
        </List>
      </Collapse>
    </>
  );
};
