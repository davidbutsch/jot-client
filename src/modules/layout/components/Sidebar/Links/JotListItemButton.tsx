import { getJot } from "@/modules/jots/api";
import { useSavedJotIds } from "@/modules/jots/hooks";
import { SavedJotIds } from "@/modules/jots/types";
import {
  Fade,
  Icon,
  IconButton,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Skeleton,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export type JotListItemButtonProps = {
  jotId: string;
  category: keyof SavedJotIds;
};

export const JotListItemButton = (props: JotListItemButtonProps) => {
  const { jotId, category } = props;

  const getJotQuery = useQuery({
    queryKey: ["jots", jotId],
    queryFn: () => getJot(jotId),
  });
  const jot = getJotQuery.data;

  const { deleteJotId } = useSavedJotIds();

  const handleDeleteJotFromCategory = () => deleteJotId(category, jotId);

  return (
    <ListItem
      sx={{
        pl: 4,
        "> .MuiListItemSecondaryAction-root": {
          display: "none",
        },

        ":hover > .MuiListItemSecondaryAction-root": {
          display: "block",
        },
      }}
      secondaryAction={
        <IconButton size="small" onClick={handleDeleteJotFromCategory}>
          <Icon fontSize="small" className="material-symbols-outlined">
            clear
          </Icon>
        </IconButton>
      }
    >
      {jot ? (
        <Fade in={true}>
          <MuiLink
            component={Link}
            to={`/${jotId}`}
            sx={{
              width: "100%",
              textDecoration: "none",
            }}
          >
            <ListItemText primary={jot.title} />
          </MuiLink>
        </Fade>
      ) : (
        <Fade in={true}>
          <Skeleton variant="text" width="80px" sx={{ fontSize: "1rem" }} />
        </Fade>
      )}
    </ListItem>
  );
};
