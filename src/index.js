import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import RepoContextProvider from "./contexts/RepoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <HelmetProvider>
          <RepoContextProvider>
            <App />
          </RepoContextProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
