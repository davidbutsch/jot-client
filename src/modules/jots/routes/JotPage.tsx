import { Editor, getJot } from "@/modules/jots";
import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const JotPage = () => {
  const { id: jotId } = useParams<{ id: string }>();

  if (!jotId) return;

  const getJotQuery = useQuery({
    queryKey: ["jots", jotId],
    queryFn: () => getJot(jotId),
  });

  const jot = getJotQuery.data;

  // Replace with loader
  if (!jot) return;

  return (
    <Container>
      <Editor jot={jot} />
    </Container>
  );
};
