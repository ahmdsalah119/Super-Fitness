import React from "react";

type Props = {
  children: React.ReactNode;
  src: string;
};

export default function PageIdentifier({ children, src }: Props) {
  return (
    <div className="flex absolute z-10 bottom-3 gap-2 left-2">
      <img src={src} />
      <span className="font-semibold text-primary">{children}</span>
    </div>
  );
}
