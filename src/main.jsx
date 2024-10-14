import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./context/appcontext.jsx";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./ui/Error.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={Error}
      onReset={() => {
        window.location.reload();
      }}
    >
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ErrorBoundary>
  </StrictMode>
);
