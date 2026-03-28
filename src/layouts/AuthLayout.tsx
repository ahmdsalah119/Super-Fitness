import { Outlet } from "react-router-dom";
import background from "@/assets/background.png";
import authLayout from "@/assets/authLayout.png";
import fit from "@/assets/fit.png";

export default function AuthLayout() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/80"></div>

      {/* Content */}
      <div className="relative w-full flex">
        {/* LEFT */}
        <div className="flex flex-col w-1/2 min-h-screen justify-center items-center border-2 border-opacity-35 border-x-red-300">
          <div className="py-36 relative flex flex-col m-auto w-full h-screen ">
            <div className="">
              <img
                src={fit}
                alt="fit"
                className="absolute top-8 left-1/2 -translate-x-1/2"
                width={243}
                height={151}
              />
            </div>
            <div className="">
              <img
                src={authLayout}
                alt="authlayout"
                className=" absolute top-20 left-1/2 -translate-x-1/2"
                width={628}
                height={474}
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
