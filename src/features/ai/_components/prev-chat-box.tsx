import type React from "react";
import { ChevronRight } from "lucide-react";

export default function PrevChatBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between wfull cursor-pointer border-b border-[#2D2D2D] pb-2.5">
      <span className="text-xs text-[#D3D3D3]">{children}</span>
      <ChevronRight width={30} height={30} className="text-[#FF4100]" />
    </div>
  );
}
