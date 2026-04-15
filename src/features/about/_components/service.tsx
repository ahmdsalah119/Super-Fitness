import React from "react";
import arrow from "@/assets/arrow-image.svg";

type ServiceProps = {
  children: React.ReactNode;
  title: string;
};

export default function Service({ children, title }: ServiceProps) {
  return (
    <div className="max-w-80 flex flex-col">
      <h1 className="text-base m-0 flex items-start gap-1">
        <img src={arrow} alt="" />
        {title}
      </h1>
      <p className="text-start text-[#242424] text-lg">{children}</p>
    </div>
  );
}
