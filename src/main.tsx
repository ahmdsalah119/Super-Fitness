import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import Providers from "./components/providers";
import { Toaster } from "sonner";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
     <Toaster/>
    </Providers>
  </React.StrictMode>,
);
