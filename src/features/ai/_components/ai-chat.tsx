import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatAnswer from "./chat-answer";
import { useChat } from "../_hooks/use-chat";

export default function AiChat() {
  // hooks
  const { messages, loading } = useChat();

  // Ref
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Scrolls the chat to the latest message smoothly
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  // Auto-scroll whenever new messages arrive or loading state changes
  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  return (
    <ScrollArea className="h-full w-full pb-40">
      <div className="flex flex-col gap-3 px-2">
        {/* Default message shown when chat is empty */}
        {messages.length === 0 && (
          <ChatAnswer isAi>How can I help you today</ChatAnswer>
        )}

        {/* Render chat messages */}
        {messages.map((msg, i) => (
          <ChatAnswer key={`${msg.role}-${i}`} isAi={msg.role === "model"}>
            {msg.text}
          </ChatAnswer>
        ))}

        {/* Loading state message while AI is generating response */}
        {loading && <ChatAnswer isAi>Thinking...</ChatAnswer>}

        {/* Invisible element used as scroll anchor */}
        {messages.length > 0 && <div ref={bottomRef} />}
      </div>
    </ScrollArea>
  );
}
