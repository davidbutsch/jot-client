import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Divider, Icon, IconButton, Menu, Stack } from "@mui/material";
import {
  amber,
  blue,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  orange,
  pink,
  purple,
  red,
  teal,
} from "@mui/material/colors";
import { Editor } from "@tiptap/react";
import { useState } from "react";
import { HighlightColorSelector } from "./HighlightColorSelector";

const highlightShade = 100;

export const colors = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  amber,
  orange,
  deepOrange,
];

export type HighlightButtonProps = {
  editor: Editor;
};

export const HighlightButton = (props: HighlightButtonProps) => {
  const { editor } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectColor = (color: string) =>
    editor.chain().focus().toggleHighlight({ color }).run() &&
    handleCloseMenu();

  const handleClearHighlight = () =>
    editor.chain().focus().toggleHighlight().run() && handleCloseMenu();

  return (
    <>
      <RichTooltip titles={["Highlight"]}>
        <IconButton
          size="small"
          onClick={handleOpenMenu}
          sx={{
            ...(editor.isActive("highlight") && {
              background: theme.palette.action.selected,
            }),
          }}
        >
          <Icon className="material-symbols-outlined" fontSize="small">
            format_ink_highlighter
          </Icon>
        </IconButton>
      </RichTooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleCloseMenu}
      >
        <Stack direction="row" px={1}>
          {colors.map((color) => (
            <HighlightColorSelector
              color={color[highlightShade]}
              handleSelectColor={handleSelectColor}
            />
          ))}
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ mx: 1 }}
          />
          <IconButton size="small" onClick={handleClearHighlight}>
            <Icon className="material-symbols-outlined" fontSize="small">
              block
            </Icon>
          </IconButton>
        </Stack>
      </Menu>
    </>
  );
};
