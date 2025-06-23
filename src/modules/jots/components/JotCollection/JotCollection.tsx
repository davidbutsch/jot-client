import { SavedJotIds } from "@/modules/jots/types";
import { Grid } from "@mui/material";
import { JotCollectionCard } from "./JotCollectionCard";

export type JotCollectionProps = {
  jotIds: string[];
  category: keyof SavedJotIds;
};

export const JotCollection = (props: JotCollectionProps) => {
  const { jotIds, category } = props;

  return (
    <Grid container spacing={2} direction="row">
      {jotIds.map((jotId) => (
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <JotCollectionCard jotId={jotId} category={category} />
        </Grid>
      ))}
    </Grid>
  );
};
