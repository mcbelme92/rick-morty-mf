import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

const isStandalone = !window.__POWERED_BY_SHELL__;

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);

const app = isStandalone ? (
  <BrowserRouter>
    <App />
  </BrowserRouter>
) : (
  <App />
);

root.render(
  <QueryClientProvider client={queryClient}>{app}</QueryClientProvider>,
);
