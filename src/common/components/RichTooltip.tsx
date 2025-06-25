import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";

export type MenuTooltipProps = {
  titles: string[];
  children: React.ReactElement;
};

export const RichTooltip = (props: MenuTooltipProps) => {
  const { titles, children } = props;
  return (
    <Tooltip
      title={
        <Box p={1 / 2}>
          <Typography>{titles[0]}</Typography>
          {titles[1] && <Typography color="#FFFFFF60">{titles[1]}</Typography>}
        </Box>
      }
    >
      {children}
    </Tooltip>
  );
};
