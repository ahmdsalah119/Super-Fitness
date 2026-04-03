import OpenIcon from "@/components/shared/open-icon";
import AiChat from "./ai-chat";
import chatBg from "@/assets/ai-bg.jpg";
import { AppInput } from "@/components/shared/app-input";
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AiChatBox() {
  return (
    <div className="h-full">
      <div className=" relative bg-transparent  top-0 left-0 w-full h-full px-4">
        <div className=" relative z-20 h-full">
          <div className=" flex items-center justify-between">
            <h1 className=" font-bold text-2xl text-[#F3F3F4]">Smart coach</h1>
            <OpenIcon />
          </div>
          {/* AI CHAT!! */}
          <div className="relative flex flex-col h-full">
            <AiChat />
          </div>
        </div>
      </div>

      <div className="-z-10 absolute top-0  w-full h-full">
        <img src={chatBg} className="  w-full h-full -z-10" alt="" />
        <div className="absolute h-full inset-0 bg-black/10 z-0 backdrop-blur-md"></div>
      </div>
    </div>
  );
}
