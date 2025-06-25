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

function getActiveListType(editor: Editor) {
  if (!editor) return null;

  if (editor.isActive("bulletList")) return 0;
  if (editor.isActive("orderedList")) return 1;
  if (editor.isActive("taskList")) return 2;

  return null;
}

export type ListButtonProps = {
  editor: Editor;
};

export const ListButton = (props: ListButtonProps) => {
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
      id: "bulletList",
      title: "Bullet List",
      icon: "list",
      handleClick: () =>
        editor.chain().focus().toggleBulletList().run() && handleCloseMenu(),
    },
    {
      id: "orderedList",
      title: "Ordered List",
      icon: "format_list_numbered",
      handleClick: () =>
        editor.chain().focus().toggleOrderedList().run() && handleCloseMenu(),
    },
    {
      id: "taskList",
      title: "Task List",
      icon: "checklist",
      handleClick: () =>
        editor.chain().focus().toggleTaskList().run() && handleCloseMenu(),
    },
  ];

  const activeList = getActiveListType(editor);

  return (
    <>
      <RichTooltip titles={["List"]}>
        <IconButton
          size="small"
          onClick={handleOpenMenu}
          sx={{
            ...(typeof activeList == "number" && {
              background: theme.palette.action.selected,
            }),
          }}
        >
          <Icon className="material-symbols-outlined" fontSize="small">
            {activeList ? options[activeList].icon : "list"}
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
            key={option.id}
            onClick={option.handleClick}
            sx={{
              ...(activeList == i && {
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
