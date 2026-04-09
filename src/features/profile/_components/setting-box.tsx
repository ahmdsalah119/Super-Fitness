import React from "react";
import { LucideIcon } from "lucide-react";

type SettingType = {
  children?: React.ReactNode;
  Icon: LucideIcon;
};

export default function SettingBox({ children, Icon }: SettingType) {
  return (
    <div className="w-52 font-baloo h-40 border rounded-2xl border-[#242424] flex items-center justify-center flex-col gap-4 font-semibold">
      <Icon width={24} height={24} className="text-primary" />
      <div className="text-[#242424]">{children}</div>
    </div>
  );
}
