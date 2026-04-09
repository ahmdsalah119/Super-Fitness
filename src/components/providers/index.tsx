import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { IntlProvider } from "react-intl";
import { QueryProvider } from "@/components/providers/query-provider";
import messagesEn from "@/i18n/en.json";
import messagesAr from "@/i18n/ar.json";

type ProvidersProps = {
  children: React.ReactNode;
};

export type LanguageContextType = {
  locale: "en" | "ar";
  setLocale: Dispatch<SetStateAction<"en" | "ar">>;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export default function Providers({ children }: ProvidersProps) {
  const [locale, setLocale] = useState<"en" | "ar">("en");

  const messagesFile = locale === "en" ? messagesEn : messagesAr;
  return (
    <IntlProvider
      messages={messagesFile}
      locale={locale}
      defaultLocale={locale}
    >
      <LanguageContext.Provider value={{ locale, setLocale }}>
        <QueryProvider>{children}</QueryProvider>
      </LanguageContext.Provider>
    </IntlProvider>
  );
}
