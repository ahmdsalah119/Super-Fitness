import PageIdentifier from "@/components/shared/page-identifier";
import gym from "@/assets/gym.svg";

export default function Title() {
  return (
    <div className="relative">
      <PageIdentifier src={gym}>About Us</PageIdentifier>
      <h1
        className="text-6xl text-shadow-lg  overflow-hidden relative font-baloo w-fit  text-white font-black uppercase  leading-none"
        style={{
          WebkitTextStroke: "4px #D3D3D3",
          paintOrder: "stroke fill",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))",
        }}
      >
        WORKOUTS
      </h1>
    </div>
  );
}
