import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import StoreContextProvider from "./context/StoreContext";
import QueryHistoryContextProvider from "./context/QueryHistoryContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryHistoryContextProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </QueryHistoryContextProvider>
  </StrictMode>
);
