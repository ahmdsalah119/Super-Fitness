import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import StepWrapper from "./step-wrapper";
import HorizontalPicker from "./horizontal-picker";

export default function StepWeight({
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

  const weight = watch("weight");

  // Variables
  const weightOptions = Array.from({ length: 111 }, (_, i) => {
    const value = i + 40;
    return { label: value.toString(), value };
  });

  // Functions
  const handleNext = async () => {
    const ok = await trigger("weight");
    if (!ok) return;
    next();
  };

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