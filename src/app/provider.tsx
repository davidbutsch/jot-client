import { ThemeProvider } from "@/theme";
import { BrowserRouter } from "react-router-dom";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        {/* Reusable Components */}
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};
