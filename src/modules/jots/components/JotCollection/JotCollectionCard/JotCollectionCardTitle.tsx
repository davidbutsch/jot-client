import { Fade, Skeleton, Typography } from "@mui/material";

export type JotCollectionCardTitleProps = {
  title?: string | undefined;
};

export const JotCollectionCardTitleProps = (
  props: JotCollectionCardTitleProps
) => {
  const { title } = props;

  // Skeleton if title is undefined
  if (!title)
    return (
      <Fade in={true} style={{ transitionDelay: "150ms" }}>
        <Skeleton variant="text" width="50%" sx={{ fontSize: 24 }} />
      </Fade>
    );

  if (title)
    return (
      <Typography fontWeight="bold" gutterBottom>
        {title}
      </Typography>
    );
};
