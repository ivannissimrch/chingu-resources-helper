import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import App from "./App";
import StoreContextProvider from "./context/StoreContext";
import QueryHistoryContextProvider from "./context/QueryHistoryContext";
import ComponentErrorFallback from "./components/ComponentErrorFallback";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ComponentErrorFallback}>
      <QueryHistoryContextProvider>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </QueryHistoryContextProvider>
    </ErrorBoundary>
  </StrictMode>
);
