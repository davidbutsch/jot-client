import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const miscCustomizations: Components<Theme> = {
  MuiTooltip: {
    defaultProps: {
      disableInteractive: true,
      slotProps: {
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                // Move tooltip 8px closer to anchor
                offset: [0, -8],
              },
            },
          ],
        },
      },
    },
    styleOverrides: {
      tooltip: {
        background: "black",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
};
