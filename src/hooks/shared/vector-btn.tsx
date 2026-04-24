import { Button } from '@/components/ui/button'
import vector from '@/assets/vector.svg'
import React from 'react'


interface VectorButtonProps {
  children: React.ReactNode;
  className?: string;
 variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
 onClick?:() => void;
}

export default function VectorButton({ children , className, variant , onClick }:VectorButtonProps) {
  return <>
   <div className="relative inline-flex items-center ">
    <div className="">
      <Button variant={variant}  className={`h-11 pr-16 px-6 font-baloo font-bold text-lg 
                    flex items-center gap-3 rounded-full ${className}`}
                    onClick={onClick} >
          {children && (
            <span>
          {children}
        </span>
        )}
     </Button>
    </div>
  <div className="absolute -right-5 top-1/2 -translate-y-1/2 -rotate-3 z-10">
  <div className="w-9  h-9 border-4 border-[#F3F3F4] rounded-full bg-primary flex items-center justify-center">
    <img
            src={vector}
            alt="vectorLogo"
            className="text-white  "
            />
  </div>
    </div>
  </div>
  </>
}
