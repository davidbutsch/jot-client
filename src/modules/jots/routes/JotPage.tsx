import { Editor } from "@/modules/jots";
import { useParams } from "react-router-dom";

export const JotPage = () => {
  const { id: jotId } = useParams<{ id: string }>();

  if (!jotId) return;

  return <Editor jotId={jotId} />;
};
