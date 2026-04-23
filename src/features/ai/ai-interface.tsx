import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";

import ImageAi from "@/assets/emo.png";
import AiChatBox from "./_components/ai-chatbox";

import { AiSidebarProvider } from "./providers/AiSidebarContext";
import { ChatProvider } from "./providers/chat-context";
import { useIntl } from "react-intl";

export function AiInterface() {
  // state
  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false);

  // Translation
  const { formatMessage } = useIntl();

  // Functions
  function toggleAIChat() {
    setChatIsOpen(!chatIsOpen);
  }

  return (
    <div
      className={cn(
        "fixed h-full right-20 flex flex-col justify-center items-center z-50",
        chatIsOpen && "top-20",
        !chatIsOpen && "-bottom-20 ",
      )}
    >
      <div className=" z-10 flex justify-center items-center">
        <div
          className={cn(
            "absolute w-32 h-32 rounded-full  z-0",
            !chatIsOpen && "bg-[#FF4100]/30 blur-2xl",
          )}
        />

        <img
          src={ImageAi}
          alt="AI Assistant"
          className="object-contain bg-transparent  -translate-x-1 translate-y-1 relative z-10 w-24"
        />
      </div>

      <Button
        onClick={toggleAIChat}
        className={cn(
          "relative z-10 px-4 py-1 rounded-full ",
          "bg-[#FF4100] text-white font-extrabold text-lg tracking-wide",
          "transition-all duration-200 hover:-translate-y-0.5",
          !chatIsOpen &&
            "[box-shadow:0_8px_32px_4px_rgba(255,90,20,0.55),_0_2px_8px_0_rgba(255,90,20,0.30)]",
        )}
      >
        {!chatIsOpen
          ? formatMessage({ id: "ask-me" })
          : formatMessage({ id: "tap-to-close" })}
      </Button>

      {/* AI BOX */}
      <div
        className={cn(
          " relative overflow-hidden mt-2 transition-all mb-24 duration-300 ease-in-out w-[359px] h-full  border-2 border-[#FF4100]  rounded-2xl",
          !chatIsOpen && "h-0 px-0 py-0  border-0",
        )}
      >
        <ChatProvider>
          <AiSidebarProvider>
            <AiChatBox />
          </AiSidebarProvider>
        </ChatProvider>
      </div>
    </div>
  );
}
