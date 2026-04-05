import React from "react";
import { cn } from "@/lib/utils/utils";
import aiBg from "@/assets/ai-chat-bg.jpg";
import userBg from "@/assets/user-bg.jpg";

export default function ChatAnswer({
  isAi,
  children,
}: {
  isAi: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        " flex gap-4 mb-3",
        !isAi && "float-right text-right flex-row-reverse",
      )}
    >
      <div className="w-9 h-9">
        <img
          src={isAi ? aiBg : userBg}
          alt="AI Assistant"
          className="w-full shadow-[4px_4px_36px_-7px_#FF6A0080] h-full rounded-full "
        />
      </div>
      <span
        className={cn(
          " text-start max-w-48  break-all  p-2 text-[#F3F3F4] rounded-xl ",
          isAi
            ? "rounded-tl-none bg-[#24242480]"
            : "bg-[#FF6A0080] rounded-tr-none",
        )}
      >
        {children}
      </span>
    </div>
  );
}
