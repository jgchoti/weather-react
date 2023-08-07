import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
