import { Outlet } from "react-router-dom";
import background from "../assets/background.png";
import authLayout from "../assets/authLayout.png";
import fit from "../assets/fit.svg";

export default function AuthLayout() {
  return (
    <div
      className="h-dvh w-full bg-cover  bg-center bg-no-repeat flex items-center justify-center relative "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Blur Layer */}
      <div className="absolute h-full inset-0 bg-black/60 backdrop-blur-xl"></div>

      {/* Content */}
      <div className="relative h-full w-full flex ">
        {/* LEFT */}
        <div className="flex flex-col w-1/2 min-h-min justify-center overflow-hidden items-center border-2 border-opacity-35 border-x-red-300">
          <div className="py-36 h-3/4 relative flex flex-col m-auto max-w-3xl justify-center items-center ">
            <div className="absolute z-10 top-7 flex items-center justify-center">
              <img
                src={fit}
                alt="Super Fitness Logo"
                className="w-[243px] h-[151px]"
              />
            </div>

            {/* Main Fitness Image */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <img
                src={authLayout}
                alt="Fitness Man"
                className="w-[628px] h-[474px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 flex items-center overflow-auto justify-center bg-black/30">
          <Outlet />
        </div>
      </div>
    </div>
 );
}
