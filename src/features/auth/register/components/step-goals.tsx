import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import StepWrapper from "./step-wrapper";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils/utils";
import { useHandleNext } from "../_hooks/use-handle-next";

const goals = [
  "gainWeight",
  "loseWeight",
  "getFitter",
  "gainFlexibility",
  "learnBasics",
];

export default function StepGoals({
  next,
  back,
}: {
  next: () => void;
  back: () => void;
}) {
  // Translation
  const intl = useIntl();

  // React Hook Form's Context
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  // Variables
  const selectedGoal = watch("goal");

  // Functions
  const handleNext = useHandleNext("goal", next);

  return (
    <StepWrapper
      title={intl.formatMessage({ id: "stepGoals.title" })}
      subtitle={intl.formatMessage({ id: "step.subtitle" })}
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
            <RadioGroupItem value={goal} className="hidden" />

            <span
              className={cn(
                "text-lg font-bold transition",
                selectedGoal
                  ? selectedGoal === goal
                    ? "text-[#FF4100]"
                    : "text-white"
                  : "text-[#D3D3D3]",
              )}
            >
              {intl.formatMessage({ id: `stepGoals.${goal}` })}
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
