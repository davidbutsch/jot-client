import "@/libs";
import { createRoot } from "react-dom/client";
import "tiptap-extension-resizable-image/styles.css";
import { App } from "./app";
import "./main.css";

createRoot(document.getElementById("root")!).render(<App />);
