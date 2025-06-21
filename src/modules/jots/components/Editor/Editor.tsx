import { Jot } from "@/modules/jots";
import { DocumentEditor } from "./DocumentEditor";
import { TitleEditor } from "./TitleEditor";

export type EditorProps = {
  jot: Jot;
};

export const Editor = (props: EditorProps) => {
  const { jot } = props;

  return (
    <>
      <TitleEditor jot={jot} />
      <DocumentEditor jot={jot} />
    </>
  );
};
