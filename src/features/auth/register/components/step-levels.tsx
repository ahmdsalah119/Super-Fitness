import { useFormContext } from "react-hook-form";
import StepWrapper from "./step-wrapper";
import { useLevels } from "../_hooks/use-get-levels";
import { cn } from "@/lib/utils/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useIntl } from "react-intl";
import { useHandleNext } from "../_hooks/use-handle-next";

export default function StepLevels({
  next,
  back,
  loading,
}: {
  next: () => void;
  back: () => void;
  loading?: boolean;
}) {
  // Translation
  const { formatMessage, locale } = useIntl();
  const lang = locale as "en" | "ar";

  // React Hook Form's Context
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  // Queries
  const { data: levels, isLoading } = useLevels(lang);

  // Variables
  const selectedLevel = watch("activityLevel");

  // Functions
  const handleNext = useHandleNext("activityLevel", next);

  if (isLoading) {
    return <p className="text-white">{formatMessage({ id: "loading" })}</p>;
  }

  return (
    <StepWrapper
      title={formatMessage({ id: "stepLevels.title" })}
      subtitle={formatMessage({ id: "step.subtitle" })}
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
        {levels?.slice(0, 5)?.map((level, index) => {
          const value = `level${index + 1}`;
          const isSelected = selectedLevel === value;
          return (
            <label
              key={level._id}
              className={cn(
                "flex justify-between items-center bg-[#D3D3D333] cursor-pointer w-[311px] py-2 px-4 border rounded-[20px] transition-all",
                isSelected ? "border-[#FF4100]" : "border-[#d9d9d9]",
              )}
            >
              <RadioGroupItem value={`level${index + 1}`} className="hidden" />

              <span
                className={cn(
                  "text-lg font-bold transition",
                  isSelected ? "text-[#FF4100]" : "text-white",
                )}
              >
                {level.name}
              </span>

              <div className="w-4 h-4 rounded-full border border-[#d9d9d9] flex items-center justify-center transition-all duration-300">
                {isSelected && (
                  <div className="w-2 h-2 rounded-full bg-[#FF4100]" />
                )}
              </div>
            </label>
          );
        })}
      </RadioGroup>
    </StepWrapper>
  );
}
