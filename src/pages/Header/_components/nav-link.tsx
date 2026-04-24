import React from "react";
import { cn } from "@/lib/utils/cn";
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  children: React.ReactNode;
  path: string;
}

export default function NavLink({ children, path }: NavLinkProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <li> 
      <Link
        to={path}
        className={cn(
          "w-fit flex gap-2 py-4 px-3 text-black dark:text-[#F3F3F4] transition-colors duration-150 font-semibold",
          pathname.split("/")[1] === path.split("/")[1] &&
            " !text-[#FF4100] dark:text-[#F3F3F4] hover:text-[#FF4100] ",
        )}
      >
        {children}
      </Link>
    </li>
  );
}
