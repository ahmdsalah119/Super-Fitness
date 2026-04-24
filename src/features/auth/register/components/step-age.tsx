import { useIntl } from "react-intl";
import { useFormContext } from "react-hook-form";
import StepWrapper from "./step-wrapper";
import HorizontalPicker from "./horizontal-picker";
import { useHandleNext } from "../_hooks/use-handle-next";

export default function StepAge({
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
  const age = watch("age");

  // Functions
  const ageOptions = Array.from({ length: 80 }, (_, i) => {
    const value = i + 18;
    return { label: value.toString(), value };
  });

  const handleNext = useHandleNext("age", next);

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
