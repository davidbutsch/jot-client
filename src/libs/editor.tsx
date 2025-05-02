import { HOLDER_ID } from "@/common";
import EditorJS from "@editorjs/editorjs";
import { Box } from "@mui/material";
import { useEffect } from "react";

export const Editor = () => {
  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: HOLDER_ID,
      data: {
        blocks: [
          {
            type: "paragraph",
            data: {
              text: "a",
            },
          },
        ],
      },
    });

    return editor;
  };

  useEffect(() => {
    initEditor();
  }, []);

  return <Box id={HOLDER_ID}></Box>;
};
