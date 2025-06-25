import { Box, IconButton } from "@mui/material";

export type HighlightColorSelectorProps = {
  color: string;
  handleSelectColor: (color: string) => any;
};

export const HighlightColorSelector = (props: HighlightColorSelectorProps) => {
  const { color, handleSelectColor } = props;

  return (
    <IconButton size="small" onClick={() => handleSelectColor(color)}>
      <Box
        sx={{
          height: 16,
          width: 24,

          bgcolor: color,
          borderRadius: 100,
        }}
      />
    </IconButton>
  );
};
