import { useIntl } from "react-intl";
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
  // Translation
  const intl = useIntl();

  // hooks
  const {
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const age = watch("age");
  
  // Variables
  const ageOptions = Array.from({ length: 80 }, (_, i) => {
    const value = i + 18;
    return { label: value.toString(), value };
  });

  // Functions
  const handleNext = async () => {
    const ok = await trigger("age");
    if (!ok) return;
    next();
  };

  return (
    <StepWrapper
      title={intl.formatMessage({ id: "stepAge.title" })}
      subtitle={intl.formatMessage({ id: "step.subtitle" })}
      onNext={handleNext}
      onBack={back}
      disableNext={!age || !!errors.age}
    >
      <HorizontalPicker
        items={ageOptions}
        value={age ?? ageOptions[0].value}
        onChange={(val) => setValue("age", val, { shouldValidate: true })}
        title={intl.formatMessage({ id: "stepAge.yearsOld" })}
      />
    </StepWrapper>
  );
}
