import React from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import fit from "@/assets/fit.svg";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#F3F3F4] dark:bg-[#232424] w-full text-[#242424] px-20 py-10 flex justify-between mt-auto gap-x-32">
        <div className="flex-1 flex-col gap-y-2">
          <div className="w-fit">
            <img
              src={fit}
              alt="Super Fitness Logo"
              className="w-[87px] h-[55px] "            
            />
          </div>
          <div className="gap-y-1 flex flex-col text-lg font-baloo font-normal">
            <div>Push harder, go further. Your</div>
            <div>fitness journey starts today!</div>
          </div>
        </div>

        {/* contact info */}
        <div className="flex-1 w-fit h-full flex flex-col items-start ">
          <div className="align-text-top font-baloo font-bold text-lg uppercase w-fit mb-6">
            contact us
          </div>

          {/* mobile */}
          <div className="flex  text-lg font-baloo font-normal gap-y-1 gap-x-4 pb-2">
            <div className="w-10 h-10 border-2 rounded-full relative">
              <Phone className=" size-5 absolute top-2 left-2 text-black fill-current" />
            </div>
            <div>+91 123 456 789</div>
          </div>

          {/* e-mail */}
          <div className="flex text-lg font-baloo font-normal gap-4">
            <div className="w-10 h-10 border-2 rounded-full relative">
              <Mail className=" size-5 absolute top-2 left-2 text-black fill-transparent" />
            </div>
            <div>info@gmail.com</div>
          </div>
        </div>

        {/* our gym timing */}
        <div className="flex-1 w-60  h-full flex flex-col items-start ">
          <div className="align-text-top font-baloo font-bold text-lg uppercase  mb-6">
            our gym timing
          </div>
          {/* timing */}
          <div className="flex flex-col gap-x-10 gap-y-2 text-sm whitespace-nowrap">
            <div className=" text-lg font-baloo font-normal ">
              <span className="">Mon - Fri: 08:00 AM - 10:00 PM</span>
            </div>
            <div className=" text-lg font-baloo font-normal  ">
              <span className="">Sat - Sun: 08:00 AM - 09:00 PM</span>
            </div>
          </div>
        </div>

        {/* our location*/}
        <div className="flex-1 w-fit h-full flex flex-col items-start">
          <div className="align-text-top font-baloo font-bold text-lg uppercase w-fit mb-6">
            our location
          </div>
          {/* location */}
          <div className="flex flex-col gap-2 text-lg font-baloo font-normal items-start ">
            <p>2715 Ash Dr. San Jose, South</p>
            <p>Dakota 83475</p>
          </div>
        </div>
      </footer>
    </>
  );
}
