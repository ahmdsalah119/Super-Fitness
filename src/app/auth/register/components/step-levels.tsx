import { useFormContext } from "react-hook-form";
import StepWrapper from "./step-wrapper";
import { useLevels } from "../_hooks/use-get-levels";
import { cn } from "@/lib/utils/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useIntl } from "react-intl";

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
  const intl = useIntl();
  type Locale = "en" | "ar";
  const locale = intl.locale as Locale;

  // hooks
  const {
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const { data: levels, isLoading } = useLevels(locale);

  const selectedLevel = watch("activityLevel");

  // Functions
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
      title={intl.formatMessage({ id: "stepLevels.title" })}
      subtitle={intl.formatMessage({ id: "stepLevels.subtitle" })}
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
        {levels?.slice(0, 5)?.map((level) => (
          <label
            key={level._id}
            className={cn(
              "flex justify-between items-center bg-[#D3D3D333] cursor-pointer w-[311px] py-2 px-4 border rounded-[20px] transition-all",
              selectedLevel === level._id
                ? "border-[#FF4100]"
                : "border-[#d9d9d9]",
            )}
          >
            <RadioGroupItem value={level._id} className="hidden" />

            <span
              className={cn(
                "text-lg font-bold transition",
                selectedLevel
                  ? selectedLevel === level._id
                    ? "text-[#FF4100]"
                    : "text-white"
                  : "text-[#D3D3D3]",
              )}
            >
              {level.name}
            </span>

            <div className="w-4 h-4 rounded-full border border-[#d9d9d9] flex items-center justify-center transition-all duration-300">
              {selectedLevel === level._id && (
                <div className="w-2 h-2 rounded-full bg-[#FF4100]" />
              )}
            </div>
          </label>
        ))}
      </RadioGroup>
    </StepWrapper>
  );
}
