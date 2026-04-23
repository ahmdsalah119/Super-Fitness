// to do :
// 1. add a title for the section
// 2. add the cards for the work out section
// 3. add the filter for
// 4. add paginiation for the workout section
// all are reusable compnents
import React from "react";
import bgImage from "../assets/workout-section/background.jpg";

export default function WorkoutSection() {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="py-16 w-full h-[771px] bg-cover bg-center bg-no-repeat border border-gray-300"
    ></section>
  );
}
