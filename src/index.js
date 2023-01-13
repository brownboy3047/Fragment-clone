import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ConnectProvider } from "./context/ConnectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConnectProvider>
      <App />
    </ConnectProvider>
  </React.StrictMode>
);
