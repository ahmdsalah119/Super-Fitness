import useAiSidebar from "../_hooks/use-ai-sidebar";
import { cn } from "@/lib/utils/utils";
import PrevChatBox from "./prev-chat-box";
import { useChat } from "../_hooks/use-chat";
import { Eraser } from "lucide-react";
import { useIntl } from "react-intl";

export default function AiSidebar() {
  // Hooks
  const { isOpen } = useAiSidebar();
  const { conversations, setCurrentConversationId, deleteConversation } =
    useChat();

  // Translation
  const { formatMessage } = useIntl();

  return (
    <div
      className={cn(
        "flex flex-col max-w-[calc(100%-50px)] py-6 max-h-[80%] custom-scrollbar overflow-auto  w-60 z-50 px-4 absolute bg-[#242424] rounded-2xl transition-all duration-300",
        isOpen ? "left-0" : "-left-60",
      )}
    >
      <h1 className="font-semibold text-xl m-0 mb-6 text-[#F3F3F4]">
        {formatMessage({ id: "prev-chats" })}
      </h1>

      {/* Previous chats */}
      {conversations.map((conv) => (
        <PrevChatBox
          key={conv.id}
          onClick={() => setCurrentConversationId(conv.id)}
        >
          {conv.title}
          <button
            onClick={() => deleteConversation(conv.id)}
            className="
            opacity-0 mx-2 align-middle group-hover:opacity-100
            transition-opacity
          hover:text-[#FF4100]
      "
          >
            <Eraser size={16} />
          </button>
        </PrevChatBox>
      ))}
    </div>
  );
}
