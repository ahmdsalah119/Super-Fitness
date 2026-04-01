import React from "react";
import { IntlProvider } from "react-intl";
import { QueryProvider } from "@/components/providers/query-provider";
import messagesEn from "@/i18n/en.json";


type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <IntlProvider messages={messagesEn} locale="en" defaultLocale="en">
      <QueryProvider>{children}</QueryProvider>
    </IntlProvider>
  );
}
