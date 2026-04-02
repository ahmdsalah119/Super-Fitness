import { useFormContext } from "react-hook-form";
import StepWrapper from "./step-wrapper";
import HorizontalPicker from "./horizontal-picker";

export default function StepWeight({
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
  const weight = watch("weight");

  const weightOptions = Array.from({ length: 111 }, (_, i) => {
    const value = i + 40;
    return { label: value.toString(), value };
  });

  const handleNext = async () => {
    const ok = await trigger("weight");
    if (!ok) return;
    next();
  };

  return (
    <StepWrapper
      title="What's your weight?"
      subtitle="This helps us personalize your plan"
      onNext={handleNext}
      onBack={back}
      disableNext={!weight || !!errors.weight}
    >
      <HorizontalPicker
        items={weightOptions}
        value={weight ?? weightOptions[0].value}
        onChange={(val) => setValue("weight", val, { shouldValidate: true })}
        title="KG"
      />
    </StepWrapper>
  );
}
