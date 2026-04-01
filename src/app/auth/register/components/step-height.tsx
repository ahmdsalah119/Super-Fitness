import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import StepWrapper from "./step-wrapper";
import HorizontalPicker from "./horizontal-picker";

export default function StepHeight({
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

  const height = watch("height");
  
  // Variables
  const heightOptions = Array.from({ length: 71 }, (_, i) => {
    const value = i + 140;
    return { label: value.toString(), value };
  });

  // Functions
  const handleNext = async () => {
    const ok = await trigger("height");
    if (!ok) return;
    next();
  };

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