import { handleUpload } from "@/modules/jots/helpers";
import { Button, Icon } from "@mui/material";
import { Editor } from "@tiptap/react";
import { ChangeEvent, useRef } from "react";

export type UploadButtonProps = {
  editor: Editor;
};

export const UploadButton = (props: UploadButtonProps) => {
  const { editor } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray: File[] = Array.from(event.target.files);
      handleUpload(editor, filesArray);
    }
  };

  const handleClickFileInput = () => inputRef.current?.click();

  return (
    <>
      <Button
        variant="contained"
        startIcon={
          <Icon className="material-symbols-outlined">upload_file</Icon>
        }
        sx={{
          flexGrow: 1,
        }}
        onClick={handleClickFileInput}
      >
        <input
          multiple={true}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          hidden
        />
        Upload
      </Button>
    </>
  );
};
