import Title from "./_components/title";
import Service from "./_components/service";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import imageOne from "@/assets/about/Image1.svg";
import imageTwo from "@/assets/about/Image2.svg";
import imageThree from "@/assets/about/Image3.svg";

export default function AboutSection() {
  return (
    <div className="relative flex mx-10  h-full text-start  flex-row-reverse gap-20 max-md:flex-col">
      {/* RIGHT SIDE */}
      <div className="w-1/2 max-md:w-full">
        <Title />
        <h1 className="text-4xl pr-36  text-start max-md:text-2xl font-bold uppercase font-baloo mb-6 break-words text-[#242424]">
          EMPOWERING YOU TO ACHIEVE{" "}
          <span className="text-primary max-sm:block">YOUR FITNESS</span>
          GOALS
        </h1>
        <p className=" text-lg pr-20 m-0 mb-16 text-start font-rubik text-[#242424]">
          We believe fitness is more than just a workout—it's a lifestyle. With
          top-of- the-line facilities, certified trainers, and a supportive
          community, we're here to inspire and guide you every step of the way.
        </p>
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
          <Service title="Personal Trainer">
            Achieve your fitness goals with the guidance of our certified
            trainers.
          </Service>
          <Service title="Cardio Programs">
            From steady-state runs to interval sprints, our treadmill programs.
          </Service>
        </div>
        <Separator className="h-[1px] my-8 bg-[#24242424]/50 " />
        <div className="flex items-center justify-between  max-sm:flex-col max-sm:gap-6">
          <Service title="Quality Equipment">
            Our gym is equipped with the latest cardio & strength machines.
          </Service>
          <Service title="Healthy Nutritions">
            Fuel your fitness journey with customized meal plans for you.
          </Service>
        </div>
        <Button name="main" className="my-8">
          Get Started
        </Button>
      </div>

      {/* LEFT SIDE */}
      <div className="w-1/2 max-md:w-full  mt-8 pl-10 max-md:pl-0   relative">
        <div className="flex items-start gap-4">
          <img
            src={imageOne}
            alt="image one"
            className="  max-md:relative top-0 w-3/5"
          />
          <img
            src={imageThree}
            alt="image three"
            className="w-1/3 translate-y-20 max-md:translate-y-10"
          />
        </div>
        <img
          src={imageTwo}
          alt="image two"
          className=" absolute right-0  md:bottom-10 max-md:top-36 max-md:-bottom-10 w-2/4"
        />
      </div>
    </div>
  );
}
