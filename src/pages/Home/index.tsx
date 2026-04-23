
import Card from "@/components/shared/cards";
import MealsSection from "@/components/shared/meals-section";
import WorkoutSection from "@/components/shared/workout-section";
import React from "react";

export default function Home() {
  return (
    <div>
      <WorkoutSection />
      <MealsSection />
    </div>
  );
}
