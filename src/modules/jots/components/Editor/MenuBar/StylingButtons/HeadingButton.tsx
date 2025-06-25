import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import {
  Icon,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Editor } from "@tiptap/react";
import { useState } from "react";

function getActiveHeadingLevel(editor: Editor) {
  if (!editor) return null;

  for (let level = 1; level <= 6; level++) {
    if (editor.isActive("heading", { level })) {
      return level;
    }
  }

  return null;
}

export type HeadingButtonProps = {
  editor: Editor;
};

export const HeadingButton = (props: HeadingButtonProps) => {
  const { editor } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      title: "Heading 1",
      icon: "format_h1",
      handleClick: () =>
        editor.chain().focus().toggleHeading({ level: 1 }).run() &&
        handleCloseMenu(),
    },
    {
      title: "Heading 2",
      icon: "format_h2",
      handleClick: () =>
        editor.chain().focus().toggleHeading({ level: 2 }).run() &&
        handleCloseMenu(),
    },
    {
      title: "Heading 3",
      icon: "format_h3",
      handleClick: () =>
        editor.chain().focus().toggleHeading({ level: 3 }).run() &&
        handleCloseMenu(),
    },
  ];

  const activeHeadingLevel = getActiveHeadingLevel(editor);

  return (
    <>
      <RichTooltip titles={["Heading"]}>
        <IconButton
          size="small"
          onClick={handleOpenMenu}
          sx={{
            ...(editor.isActive("heading") && {
              background: theme.palette.action.selected,
            }),
          }}
        >
          <Icon className="material-symbols-outlined" fontSize="small">
            {activeHeadingLevel ? `format_h${activeHeadingLevel}` : "format_h1"}
          </Icon>
          <Icon className="material-symbols-outlined" fontSize="small">
            arrow_drop_down
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
        {options.map((option, i) => (
          <MenuItem
            key={option.title}
            onClick={option.handleClick}
            sx={{
              ...(activeHeadingLevel == i + 1 && {
                background: theme.palette.action.selected,
              }),
            }}
          >
            <ListItemIcon>
              <Icon fontSize="small" className="material-symbols-outlined">
                {option.icon}
              </Icon>
            </ListItemIcon>
            <ListItemText>{option.title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
