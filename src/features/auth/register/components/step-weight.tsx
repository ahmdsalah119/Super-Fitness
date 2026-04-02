import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import StepWrapper from "./step-wrapper";
import HorizontalPicker from "./horizontal-picker";
import { useHandleNext } from "../_hooks/use-handle-next";

export default function StepWeight({
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
  const weight = watch("weight");

  // Functions
  const weightOptions = Array.from({ length: 111 }, (_, i) => {
    const value = i + 40;
    return { label: value.toString(), value };
  });

  const handleNext = useHandleNext("weight", next);

  return (
    <StepWrapper
      title={intl.formatMessage({ id: "stepWeight.title" })}
      subtitle={intl.formatMessage({ id: "step.subtitle" })}
      onNext={handleNext}
      onBack={back}
      disableNext={!weight || !!errors.weight}
    >
      <HorizontalPicker
        items={weightOptions}
        value={weight ?? weightOptions[0].value}
        onChange={(val) => setValue("weight", val, { shouldValidate: true })}
        title={intl.formatMessage({ id: "stepWeight.unit" })}
      />
    </StepWrapper>
  );
}
