import { cn } from "@/lib/utils/utils";

import { CircleX } from "lucide-react";

type ErrorBoxProps = {
  error: string;
  className?: string;
};

export function ErrorBox({ error, className }: ErrorBoxProps) {
  return (
    <p
      className={cn(
        "relative flex justify-center items-center min-h-10 w-full p-2.5 border border-destructive rounded-md bg-destructive-50 text-sm font-regular text-destructive text-center",
        className,
      )}
    >
      {error ? error.charAt(0).toUpperCase() + error.slice(1) : ""}

      <span className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 text-destructive bg-red-100 bg-blur-sm rounded-full">
        <CircleX className="" strokeWidth={1.5} size={18} />
      </span>
    </p>
  );
}
