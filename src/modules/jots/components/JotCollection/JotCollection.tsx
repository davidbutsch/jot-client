import { Grid } from "@mui/material";
import { JotCollectionCard } from "./JotCollectionCard";

export type JotCollectionProps = {
  jotIds: string[];
};

export const JotCollection = (props: JotCollectionProps) => {
  const { jotIds } = props;

  return (
    <Grid container spacing={2} direction="row">
      {jotIds.map((jotId) => (
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <JotCollectionCard jotId={jotId} />
        </Grid>
      ))}
    </Grid>
  );
};
