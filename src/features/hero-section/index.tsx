import herImg from "@/assets/hero-section.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-between pt-10 max-md:flex-col ">
      <div>
        <h1 className="text-6xl px-5 max-md:text-2xl font-bold uppercase font-baloo mb-6 break-words text-[#242424]">
          Your body can{" "}
          <span className="text-primary max-sm:block">stand almost</span>
          anything
        </h1>
        <p className="max-w-[620px] min-w-1 break-words border-l-4 border-primary pl-4 font-rubik text-[#242424]">
          It's your mind that needs convincing. Push past your limits, stay
          committed, and watch as your body transform into powerhouse of
          strength and resilience. Start your journey today & truly capable of!
        </p>
        <div className="flex justify-start gap-8 mt-24 max-sm:flex-col">
          <div className="text-[#242424] flex flex-col pr-12">
            <span className="text-2xl font-bold">1200+</span>
            <span className="text-lg">Active Members</span>
          </div>
          <div className="text-[#242424] flex flex-col pr-12">
            <span className="text-2xl font-bold">12+</span>
            <span className="text-lg">Certified Trainers</span>
          </div>
          <div className="text-[#242424] flex flex-col pr-12">
            <span className="text-2xl font-bold">20+</span>
            <span className="text-lg">Year Of Experience</span>
          </div>
        </div>
        <div className="text-base flex gap-16 mt-16 max-md:justify-between max-sm:gap-2 max-md:mb-4">
          <Button name="main">Get Started</Button>
          <Button variant="outline" name="main">
            Explore More
          </Button>
        </div>
      </div>
      <img src={herImg} width={467} alt="Hero" />
    </div>
  );
}
