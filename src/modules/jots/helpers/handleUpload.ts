import { UPLOADS_URL } from "@/common";
import { uploadFiles } from "@/modules/jots/api";
import { Editor } from "@tiptap/react";
import { toast } from "sonner";
import { getEditorWidth } from "./getEditorWidth";

export async function handleUpload(editor: Editor, files: File[]) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    const uploadedFilesPromise = uploadFiles([file]);

    toast.promise(uploadedFilesPromise, {
      loading: `Uploading ${file.name}...`,
      success: `Successfully uploaded ${file.name}`,
      error: `Error uploading ${file.name}`,
    });

    const uploadedFile = (await uploadedFilesPromise)[0];

    const src = `${UPLOADS_URL}/${uploadedFile.key}`;

    // Get top level type from mimetype
    const topLevelType = file.type.split("/")[0];

    switch (topLevelType) {
      case "image":
        // Get image dimensions
        const img = new Image();
        img.src = src;
        img.onload = () => {
          const editorWidth = getEditorWidth();

          if (editorWidth && img.width > editorWidth) {
            const ratio = img.width / img.height;

            const newWidth = editorWidth;
            const newHeight = editorWidth / ratio;

            img.width = newWidth;
            img.height = newHeight;
          }

          editor
            .chain()
            .focus()
            .setResizableImage({
              src,
              width: img.width,
              height: img.height,
              "data-keep-ratio": true,
            })
            .run();
        };

        break;
      default:
        editor.commands.insertContent([
          {
            type: "file",
            attrs: {
              src,
              name: file.name,
              size: file.size,
            },
          },
          {
            type: "paragraph", // creates space and moves the cursor
          },
        ]);

        editor.commands.focus();
    }
  }
}
