// Hooks
import { useRef } from "react";
import { useLanguage } from "@/hooks/use-language";
import { useIntl } from "react-intl";

// Shadcn
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils/utils";

import SettingBox from "./setting-box";
import { Globe } from "lucide-react";

export default function SelectLanguage() {
  // Ref
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Custom Hook for change the language
  const { locale, setLocale } = useLanguage();

  // Translation
  const { formatMessage } = useIntl();

  // Functions
  function handleChangeLang(lang: "ar" | "en") {
    setLocale(lang);
    triggerRef.current?.click();
  }

  return (
    <SettingBox Icon={Globe}>
      <div>{formatMessage({ id: "chose-lang" })} </div>
      <Popover>
        (
        <PopoverTrigger ref={triggerRef} asChild className="text-primary">
          <button>{locale === "en" ? "English" : "Arabic"}</button>
        </PopoverTrigger>
        )
        <PopoverContent align="center" className="bg-[#242424F2] w-40 ">
          <PopoverTitle className="text-center text-white border-b pb-2">
            Select Language
          </PopoverTitle>
          <ul className="text-white flex flex-col pl-3 gap-1">
            <li
              onClick={() => handleChangeLang("en")}
              className={cn(
                "px-2 py-1 rounded-lg cursor-pointer",
                locale === "en" && "bg-primary",
              )}
            >
              {" "}
              <button>English</button>
            </li>

            <li
              onClick={() => handleChangeLang("ar")}
              className={cn(
                "px-2 py-1 rounded-lg cursor-pointer",
                locale === "ar" && "bg-primary",
              )}
            >
              <button>Arabic</button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </SettingBox>
  );
}
