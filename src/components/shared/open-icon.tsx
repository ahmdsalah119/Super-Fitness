import { cn } from "@/lib/utils/utils";
import type { ComponentPropsWithoutRef } from "react";

type IconProps = ComponentPropsWithoutRef<"button">;

export default function OpenIcon(props: IconProps) {
  const style = "h-[3px] bg-[#FF4100]  rounded-full";

  return (
    <button
      {...props}
      className={cn(
        "flex h-6 w-6 flex-col gap-1.5 !cursor-pointer",
        props.className,
      )}
    >
      <span className={cn(style, "w-5")}></span>
      <span className={cn(style, "w-4")}></span>
      <span className={cn(style, "w-6")}></span>
    </button>
  );
}
