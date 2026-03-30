import { useFormContext } from "react-hook-form";
import StepWrapper from "./step-wrapper";
import HorizontalPicker from "./horizontal-picker";

export default function StepAge({
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
  const age = watch("age");

  const ageOptions = Array.from({ length: 80 }, (_, i) => {
    const value = i + 18;
    return { label: value.toString(), value };
  });

  const handleNext = async () => {
    const ok = await trigger("age");
    if (!ok) return;
    next();
  };

  return (
    <StepWrapper
      title="How Old Are you ?"
      subtitle="this helps us create Your personalized plan"
      onNext={handleNext}
      onBack={back}
      disableNext={!age || !!errors.age}
    >
      <HorizontalPicker
        items={ageOptions}
        value={age ?? ageOptions[0].value}
        onChange={(val) => setValue("age", val, { shouldValidate: true })}
        title="Years Old"
      />
    </StepWrapper>
  );
}
