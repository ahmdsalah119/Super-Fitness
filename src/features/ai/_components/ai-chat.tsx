import { ScrollArea } from "@/components/ui/scroll-area";
import ChatAnswer from "./chat-answer";

export default function AiChat() {
  return (
    <ScrollArea className=" h-full w-full  pb-40 relative">
      <ChatAnswer isAi>How can i help u today</ChatAnswer>
      <ChatAnswer isAi={false}>i need to finish this training</ChatAnswer>
    </ScrollArea>
  );
}
