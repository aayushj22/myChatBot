import { createRoot } from "react-dom/client";
import { Widget } from "./Widget";

const root = createRoot(document.getElementById("chatbot"));
root.render(<Widget />);
