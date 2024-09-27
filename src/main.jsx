import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/Context.jsx";

const rootElement = document.getElementById("root");

// Check if rootElement is null before rendering
if (rootElement) {
  createRoot(rootElement).render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
} else {
  console.error('Could not find element with id "root"');
}
