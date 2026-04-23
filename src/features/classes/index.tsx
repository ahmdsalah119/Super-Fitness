import ClassesHeading from "./_components/classes-heading";
import MuscleTabs from "./_components/muscles-tabs";

export default function Classes() {
  return (
    <main className="relative min-h-screen bg-[url('assets/classes-background.jpg')] bg-cover">
      {/* overlay */}
      <div className="absolute top-0 left-0 h-full w-full min-h-screen bg-[#24242499] backdrop-blur-3xl"></div>
      <div className="relative z-10">
        {/*Heading*/}
        <ClassesHeading />
        {/*Tabs*/}
        <MuscleTabs />
      </div>
    </main>
  );
}
