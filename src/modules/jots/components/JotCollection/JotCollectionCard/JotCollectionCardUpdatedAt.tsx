import { Box, Fade, Skeleton, Typography } from "@mui/material";

export type JotCollectionCardUpdatedAtProps = {
  timeSinceLastUpdated?: string | undefined;
};

export const JotCollectionCardUpdatedAt = (
  props: JotCollectionCardUpdatedAtProps
) => {
  const { timeSinceLastUpdated } = props;

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", flexGrow: 1 }}>
      {timeSinceLastUpdated ? (
        <Typography
          fontSize="12px"
          color="textSecondary"
          // Align text to bottom of card
          sx={{
            display: "flex",
            alignItems: "flex-end",
            flexGrow: 1,
          }}
        >
          Updated {timeSinceLastUpdated}
        </Typography>
      ) : (
        // Skeleton if time since last update is undefined
        <Fade
          in={true}
          style={{
            transitionDelay: "150ms",
          }}
        >
          <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />
        </Fade>
      )}
    </Box>
  );
};
