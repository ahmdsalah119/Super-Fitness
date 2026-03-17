import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryProvider } from "./providers/query-provider";
import { IntlProvider } from "react-intl";
import messagesEn from "./i18n/en.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrap everything in IntlProvider */}
    <IntlProvider messages={messagesEn} locale="en" defaultLocale="en">
      <QueryProvider>
        <App />
      </QueryProvider>
    </IntlProvider>
  </React.StrictMode>,
);
