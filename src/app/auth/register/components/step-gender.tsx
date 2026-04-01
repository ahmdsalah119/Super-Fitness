import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import StepWrapper from "./step-wrapper";
import { Mars, Venus } from "lucide-react";
import { cn } from "@/lib/utils/utils";

export default function StepGender({
  next,
  back,
}: {
  next: () => void;
  back: () => void;
}) {
  // Translation
  const intl = useIntl();

  // hooks
  const {
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const gender = watch("gender");
  
  // Functions
  const handleSelect = (value: "male" | "female") => {
    setValue("gender", value, { shouldValidate: true });
  };

  const handleNext = async () => {
    const ok = await trigger("gender");
    if (!ok) return;
    next();
  };

  return (
    <StepWrapper
      title={intl.formatMessage({ id: "stepGender.title" })}
      subtitle={intl.formatMessage({ id: "stepGender.subtitle" })}
      onNext={handleNext}
      onBack={back}
      disableNext={!gender || !!errors.gender}
    >
      <div className="flex gap-6 mt-4">
        <button
          onClick={() => handleSelect("male")}
          className={cn(
            "w-24 h-24 rounded-full border flex flex-col items-center justify-center transition",
            gender === "male" ? "border-white bg-white/10" : "border-gray-500",
          )}
        >
          <Mars size={50} />
          <span className="text-sm">
            {intl.formatMessage({ id: "stepGender.male" })}
          </span>
        </button>

        <button
          onClick={() => handleSelect("female")}
          className={cn(
            "w-24 h-24 rounded-full border flex flex-col items-center justify-center transition",
            gender === "female"
              ? "border-white bg-white/10"
              : "border-gray-500",
          )}
        >
          <Venus size={50} />
          <span className="text-sm">
            {intl.formatMessage({ id: "stepGender.female" })}
          </span>
        </button>
      </div>
    </StepWrapper>
  );
}