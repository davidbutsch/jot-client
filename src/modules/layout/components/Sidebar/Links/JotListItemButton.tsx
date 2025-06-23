import { getJot } from "@/modules/jots/api";
import { Fade, ListItemButton, ListItemText, Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export type JotListItemButtonProps = {
  jotId: string;
};

export const JotListItemButton = (props: JotListItemButtonProps) => {
  const { jotId } = props;

  const getJotQuery = useQuery({
    queryKey: ["jots", jotId],
    queryFn: () => getJot(jotId),
  });
  const jot = getJotQuery.data;

  return (
    <ListItemButton sx={{ pl: 4 }}>
      {jot ? (
        <Fade in={true}>
          <ListItemText primary={jot.title} />
        </Fade>
      ) : (
        <Fade in={true}>
          <Skeleton variant="text" width="80px" sx={{ fontSize: "1rem" }} />
        </Fade>
      )}
    </ListItemButton>
  );
};
