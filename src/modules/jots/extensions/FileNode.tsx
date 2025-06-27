// FileNode.ts
import { formatBytes } from "@/modules/jots/helpers";
import { Card, CardActionArea, Icon, Stack, Typography } from "@mui/material";
import { Node } from "@tiptap/core";
import {
  NodeViewWrapper,
  ReactNodeViewProps,
  ReactNodeViewRenderer,
} from "@tiptap/react";

const FileView = ({ node }: ReactNodeViewProps<HTMLElement>) => {
  const { src, name, size } = node.attrs;

  const handleClick = () => {
    window.open(src, "_blank", "noopener,noreferrer");
  };

  return (
    <NodeViewWrapper>
      <Card variant="outlined" sx={{ my: "1rem", caretColor: "transparent" }}>
        <CardActionArea onClick={handleClick}>
          <Stack direction="row" gap={1} p={1} alignItems="center">
            <Card
              variant="outlined"
              sx={{
                width: 48,
                height: 48,

                bgcolor: "rgba(0, 0, 0, .06)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon className="material-symbols-outlined">draft</Icon>
            </Card>
            <Stack
              sx={{
                "> p": {
                  p: "0px !important",
                },
              }}
            >
              <Typography fontWeight="bold">{name}</Typography>
              <Typography fontSize={14} color="textSecondary">
                {formatBytes(size)}
              </Typography>
            </Stack>
            <Icon
              className="material-symbols-outlined"
              sx={{ ml: "auto", mr: 1 }}
            >
              download
            </Icon>
          </Stack>
        </CardActionArea>
      </Card>
    </NodeViewWrapper>
  );
};

export const FileNode = Node.create({
  name: "file",
  group: "block",
  content: "inline*",
  atom: true,
  isolating: true,

  addAttributes() {
    return {
      src: {},
      name: {},
      size: {},
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="file"]',
      },
    ];
  },

  // Defines how to render this node to HTML.
  // This is used when you get the editor's content as HTML.
  renderHTML({ HTMLAttributes }) {
    // The first element is the node itself, the second is for the content.
    return ["div", { ...HTMLAttributes, "data-type": "file" }, 0];
  },

  // This is the key part for Node Views.
  // It tells Tiptap to use our React component to render the node.
  addNodeView() {
    return ReactNodeViewRenderer(FileView);
  },
});
