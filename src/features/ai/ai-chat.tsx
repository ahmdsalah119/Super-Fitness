import { ScrollArea } from "@/components/ui/scroll-area";
import ChatAnswer from "./chat-answer";
import { AppInput } from "@/components/shared/app-input";
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AiChat() {
  return (
    <div className="h-fit">
      <ScrollArea className="h-full w-full relative">
        <ChatAnswer isAi>How can i help u today</ChatAnswer>
        <ChatAnswer isAi={false}>i need to finish this training</ChatAnswer>
      </ScrollArea>
      <div className="mx-8  flex gap-2 -translate-y-16 ">
        <AppInput
          className="h-9 "
          iconClass="text-[#FF4100]"
          icon={PencilLine}
          placeholder="Send"
        />
        <Button className=" bg-primary h-9">Send</Button>
      </div>
    </div>
  );
}
