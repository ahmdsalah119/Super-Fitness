import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import StepWrapper from "./step-wrapper";
import HorizontalPicker from "./horizontal-picker";
import { useHandleNext } from "../_hooks/use-handle-next";

export default function StepHeight({
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
  const height = watch("height");

  // Functions
  const heightOptions = Array.from({ length: 70 }, (_, i) => {
    const value = i + 140;
    return { label: value.toString(), value };
  });

  const handleNext = useHandleNext("height", next);

  return (
    <StepWrapper
      title={intl.formatMessage({ id: "stepHeight.title" })}
      subtitle={intl.formatMessage({ id: "step.subtitle" })}
      onNext={handleNext}
      onBack={back}
      disableNext={!height || !!errors.height}
    >
      <HorizontalPicker
        items={heightOptions}
        value={height ?? heightOptions[0].value}
        onChange={(val) => setValue("height", val, { shouldValidate: true })}
        title={intl.formatMessage({ id: "stepHeight.unit" })}
      />
    </StepWrapper>
  );
}
