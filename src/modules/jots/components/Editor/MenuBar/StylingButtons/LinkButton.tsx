import { RichTooltip } from "@/common/components";
import { normalizeUrl } from "@/modules/jots/helpers";
import { theme } from "@/theme";
import {
  Divider,
  Icon,
  IconButton,
  Menu,
  Stack,
  TextField,
} from "@mui/material";
import { Editor } from "@tiptap/react";
import { useState } from "react";

export type LinkButtonProps = {
  editor: Editor;
};

export const LinkButton = (props: LinkButtonProps) => {
  const { editor } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [link, setLink] = useState("");

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setLink(value);
  };

  const handleAddLink = () => {
    if (link == "")
      return editor.chain().focus().extendMarkRange("link").unsetLink().run();

    const url = normalizeUrl(link);

    if (!url) return;

    const { hostname } = new URL(url);

    editor
      ?.chain()
      .focus()
      .insertContent([
        {
          type: "text",
          text: hostname,
          marks: [
            {
              type: "link",
              attrs: {
                href: link,
              },
            },
          ],
        },
      ])
      .run();
  };
  const handleDeleteLink = () => editor.chain().focus().unsetLink().run();

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLink(editor.getAttributes("link").href || "");
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <RichTooltip titles={["Link"]}>
        <IconButton
          size="small"
          onClick={handleOpenMenu}
          sx={{
            ...(editor.isActive("link") && {
              background: theme.palette.action.selected,
            }),
          }}
        >
          <Icon className="material-symbols-outlined" fontSize="small">
            link
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
        <Stack direction="row" px={1.5} gap={1} alignItems="center">
          <TextField
            value={link}
            onChange={handleLinkChange}
            placeholder="Past a link..."
            variant="standard"
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
          />
          <RichTooltip titles={["Add Link"]}>
            <IconButton onClick={handleAddLink}>
              <Icon className="material-symbols-outlined" fontSize="small">
                add_link
              </Icon>
            </IconButton>
          </RichTooltip>
          <Divider flexItem orientation="vertical" variant="middle" />
          <RichTooltip titles={["Delete Link"]}>
            <IconButton
              disabled={!editor.isActive("link")}
              onClick={handleDeleteLink}
            >
              <Icon className="material-symbols-outlined" fontSize="small">
                delete
              </Icon>
            </IconButton>
          </RichTooltip>
        </Stack>
      </Menu>
    </>
  );
};
