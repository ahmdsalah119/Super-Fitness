import useAiSidebar from "../_hooks/use-ai-sidebar";
import { cn } from "@/lib/utils/utils";
import PrevChatBox from "./prev-chat-box";

export default function AiSidebar() {
  // Hooks
  const { isOpen } = useAiSidebar();

  return (
    <div
      className={cn(
        "flex flex-col max-w-[calc(100%-50px)] py-6 max-h-[70%]  overflow-auto [&::-webkit-scrollbar]:hidden w-2/3 z-50 px-4 absolute bg-[#242424] rounded-2xl transition-all duration-300",
        isOpen ? "left-0" : "-left-60",
      )}
    >
      <h1 className="font-semibold text-xl m-0 mb-6 text-[#F3F3F4]">
        Previous conversations
      </h1>

      {/* Previous chats */}
      <PrevChatBox>Lorem ipsum dolor sit amet</PrevChatBox>
      <PrevChatBox>Lorem ipsum dolor sit amet</PrevChatBox>
      <PrevChatBox>Lorem ipsum dolor sit amet</PrevChatBox>
      <PrevChatBox>Lorem ipsum dolor sit amet</PrevChatBox>
    </div>
  );
}
