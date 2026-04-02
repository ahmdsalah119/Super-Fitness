import { useFormContext } from "react-hook-form";
import StepWrapper from "./step-wrapper";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils/utils";

const goals = [
  "Gain Weight",
  "Lose Weight",
  "git fitter",
  "Gain more flexible",
  "Learn the basic",
];

export default function StepGoals({
  next,
  back,
}: {
  next: () => void;
  back: () => void;
}) {
  const {
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();
  const selectedGoal = watch("goal");

  const handleNext = async () => {
    const ok = await trigger("goal");
    if (!ok) return;
    next();
  };

  return (
    <StepWrapper
      title="What is your goal?"
      subtitle="This helps us personalize your plan"
      onNext={handleNext}
      onBack={back}
      disableNext={!selectedGoal || !!errors.goal}
    >
      <RadioGroup
        value={selectedGoal}
        onValueChange={(value) =>
          setValue("goal", value, { shouldValidate: true })
        }
        className="flex flex-col gap-4 mt-6"
      >
        {goals.map((goal) => (
          <label
            key={goal}
            className={cn(
              "flex justify-between bg-[#D3D3D333] items-center cursor-pointer w-[311px] py-2 px-4 border rounded-[20px] transition-all",
              selectedGoal === goal ? "border-[#FF4100]" : "border-[#d9d9d9]",
            )}
          >
            {/* Hidden radio */}
            <RadioGroupItem value={goal} className="hidden" />

            {/* Label */}
            <span
              className={cn(
                "text-lg font-bold capitalize transition",
                selectedGoal
                  ? selectedGoal === goal
                    ? "text-[#FF4100]"
                    : "text-white"
                  : "text-[#D3D3D3]",
              )}
            >
              {goal}
            </span>

            <div className="w-4 h-4 rounded-full border border-[#d9d9d9] flex items-center justify-center transition-all duration-300">
              {selectedGoal === goal && (
                <div className="w-2 h-2 rounded-full bg-[#FF4100]" />
              )}
            </div>
          </label>
        ))}
      </RadioGroup>
    </StepWrapper>
  );
}
