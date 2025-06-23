import { getJot } from "@/modules/jots/api";
import { Card, CardActionArea, CardContent, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { JotCollectionCardPreviewText } from "./JotCollectionCardPreviewText";
import { JotCollectionCardTitleProps } from "./JotCollectionCardTitle";
import { JotCollectionCardUpdatedAt } from "./JotCollectionCardUpdatedAt";

export type JotCollectionCardProps = {
  jotId: string;
};

export const JotCollectionCard = (props: JotCollectionCardProps) => {
  const { jotId } = props;

  const navigate = useNavigate();

  const getJotQuery = useQuery({
    queryKey: ["jots", jotId],
    queryFn: () => getJot(jotId),
  });
  const jot = getJotQuery.data;

  return (
    <Card variant="outlined">
      <CardActionArea onClick={() => navigate(`/${jot?.id}`)} disabled={!jot}>
        <CardContent>
          <Stack
            // Constant card height
            height="120px"
          >
            <JotCollectionCardTitleProps title={jot?.title} />
            <JotCollectionCardPreviewText content={jot?.content} />
            <JotCollectionCardUpdatedAt
              timeSinceLastUpdated={jot?.timeSinceLastUpdated}
            />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
