import { useFormContext } from "react-hook-form";
import StepWrapper from "./step-wrapper";
import { useLevels } from "../_hooks/use-get-levels";
import { cn } from "@/lib/utils/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function StepLevels({
  next,
  back,
  loading,
}: {
  next: () => void;
  back: () => void;
  loading?: boolean;
}) {
  const {
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();
  const selectedLevel = watch("activityLevel");

  const { data: levels, isLoading } = useLevels("en");

  const handleNext = async () => {
    const ok = await trigger("activityLevel");
    if (!ok) return;
    next();
  };

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <StepWrapper
      title="What is your goal?"
      subtitle="This helps us personalize your plan"
      onNext={handleNext}
      onBack={back}
      disableNext={!selectedLevel || !!errors.activityLevel || loading}
    >
      <RadioGroup
        value={selectedLevel}
        onValueChange={(value) =>
          setValue("activityLevel", value, { shouldValidate: true })
        }
        className="flex flex-col gap-4 mt-6"
      >
        {levels?.slice(0,5)?.map((level) => (
          <label
            key={level._id}
            className={cn(
              "flex justify-between items-center bg-[#D3D3D333] cursor-pointer w-[311px] py-2 px-4 border rounded-[20px] transition-all",
              selectedLevel === level.name
                ? "border-[#FF4100]"
                : "border-[#d9d9d9]",
            )}
          >
            {/* hidden radio */}
            <RadioGroupItem value={level.name} className="hidden" />

            {/* Label */}
            <span
              className={cn(
                "text-lg font-bold capitalize transition",
                selectedLevel
                  ? selectedLevel === level.name
                    ? "text-[#FF4100]"
                    : "text-white"
                  : "text-[#D3D3D3]",
              )}
            >
              {level.name}
            </span>

            {/* Custom Circle */}
            <div className="w-4 h-4 rounded-full border border-[#d9d9d9] flex items-center justify-center transition-all duration-300">
              {selectedLevel === level.name && (
                <div className="w-2 h-2 rounded-full bg-[#FF4100]" />
              )}
            </div>
          </label>
        ))}
      </RadioGroup>
    </StepWrapper>
  );
}
