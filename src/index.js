import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Globalstyle } from "./components/Globalstyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>
);
