import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import Providers from "./components/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
