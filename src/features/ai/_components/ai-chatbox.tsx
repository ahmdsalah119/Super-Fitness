import OpenIcon from "@/components/shared/open-icon";
import AiChat from "./ai-chat";
import chatBg from "@/assets/ai-bg.jpg";
import { AppInput } from "@/components/shared/app-input";
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import AiSidebar from "./ai-sidebar";
import useAiSidebar from "../_hooks/use-ai-sidebar";

export default function AiChatBox() {
  const { toggle, isOpen } = useAiSidebar();
  return (
    <div className="h-full relative">
      {/* Black Layer behind the side bar */}
      {isOpen && (
        <div
          className="absolute h-full inset-0 bg-black/50 z-40 "
          onClick={toggle}
        ></div>
      )}

      {/* The Side Bar */}
      <AiSidebar />

      {/* Content */}
      <div className=" relative bg-transparent z-0  top-0 left-0 w-full h-full px-4">
        <div className=" relative z-20 h-full">
          <div className=" flex items-center justify-between">
            <h1 className=" font-bold text-2xl text-[#F3F3F4]">Smart coach</h1>

            <OpenIcon onClick={toggle} />
          </div>

          {/* AI CHAT!! */}
          <AiChat />
        </div>
      </div>

      <form className="mx-8 z-40 flex gap-2 -translate-y-16 ">
        <AppInput
          className="h-9 "
          iconClass="text-[#FF4100]"
          icon={PencilLine}
          placeholder="Send"
        />
        <Button className=" bg-[#FF4100] h-9">Send</Button>
      </form>

      <div className="-z-10 absolute top-0  w-full h-full">
        <img src={chatBg} className="  w-full h-full -z-10" alt="" />
        <div className="absolute h-full inset-0 bg-black/10 z-0 backdrop-blur-md"></div>
      </div>
    </div>
  );
}
