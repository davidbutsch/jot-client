import { Box } from "@mui/material";
import { Sidebar } from "./Sidebar/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box ml="240px">
      <Sidebar />
      {children}
    </Box>
  );
};
