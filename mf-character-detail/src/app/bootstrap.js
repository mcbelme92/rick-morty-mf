import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const isStandalone = !window.__POWERED_BY_SHELL__;

const container = document.getElementById("root");
const root = createRoot(container);

const Root = isStandalone ? (
  <BrowserRouter>
    <App />
  </BrowserRouter>
) : (
  <App />
);

root.render(Root);
