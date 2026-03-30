import { useFormContext } from "react-hook-form";
import StepWrapper from "./step-wrapper";
import HorizontalPicker from "./horizontal-picker";

export default function StepHeight({
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
  const height = watch("height");

  const heightOptions = Array.from({ length: 71 }, (_, i) => {
    const value = i + 140;
    return { label: value.toString(), value };
  });

  const handleNext = async () => {
    const ok = await trigger("height");
    if (!ok) return;
    next();
  };

  return (
    <StepWrapper
      title="What's your height?"
      subtitle="This helps us personalize your plan"
      onNext={handleNext}
      onBack={back}
      disableNext={!height || !!errors.height}
    >
      <HorizontalPicker
        items={heightOptions}
        value={height ?? heightOptions[0].value}
        onChange={(val) => setValue("height", val, { shouldValidate: true })}
        title="CM"
      />
    </StepWrapper>
  );
}
