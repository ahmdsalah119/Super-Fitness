import React from "react";
import header from "@/assets/Theo Vance.svg";
import VectorButton from "@/hooks/shared/vector-btn";

export default function HeroSection() {
  return (
    <div className="w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-3xl "
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      >
       </div>
        <div className="relative w-full pt-32 pb-20 bg-[#a8a7a7]">
          <div className=" flex md:flex-2 items-start justify-between m-auto container">
            {/* left content*/}
            <div>
              <div className="flex flex-col items-start">
              <h1 className="text-6xl font-bold font-baloo text-black dark:text-white leading-3">
                YOUR BODY CAN <span className="text-[#FF4100]">STAND</span>
                </h1>
              <h1 className="text-6xl font-bold font-baloo text-black dark:text-white">
                ALMOST <span className="text-[#FF4100]">ANYTHING</span>
              </h1>
              </div>
              <p className="mt-6 text-lg font-normal font-rubik max-w-xl text-left pl-2 border-l-4 border-[#FF4100]">
                t's your mind that needs convincing. Push past your limits, stay
                committed, and watch as your body transform into powerhouse of 
                strength and resilience. Start your journey today & truly capable of!
              </p>

              <div className="flex flex-col md:flex-row lg:flex-row mt-16 ">
                <div className="flex flex-col items-start">
                  <span>1200+</span>
                  <span>Active Members</span>
                </div>
                <div className=" flex flex-col items-start px-8">
                  <span>12+</span>
                  <span>Certified Trainers</span>
                </div>
                <div className="flex flex-col items-start">
                  <span>20+</span>
                  <span>Year Of Experience</span>
                </div>
              </div>

              <div className="mt-16 flex ">
                <div className="items-start">
                <VectorButton>Get Started</VectorButton>
                </div>
                <div className="px-16">
                <VectorButton variant="outline">Explore More</VectorButton>
                </div>
              </div>
            </div>

          
            <div className=" ">
               <img
              src={header}
              alt="home header Logo" />
             </div>
      </div>
    </div>
    </div>
  )
}

