import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { useIntl } from "react-intl";

type StepWrapperProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  onNext: () => void;
  onBack?: () => void;
  disableNext?: boolean;
};

export default function StepWrapper({
  title,
  subtitle,
  children,
  onNext,
  onBack,
  disableNext,
}: StepWrapperProps) {
  // Translation
  const { formatMessage } = useIntl();

  return (
    <div className="flex flex-col items-center justify-center text-white space-y-8">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold uppercase text-white">
          {title}
        </h1>
        {subtitle && <p className="text-2xl capitalize">{subtitle}</p>}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center">{children}</div>

      {/* Actions */}
      {onBack && (
        <ArrowBigLeft
          className="absolute left-4 top-4 cursor-pointer"
          onClick={onBack}
        />
      )}

      {subtitle && (
        <Button
          onClick={onNext}
          disabled={disableNext}
          className="font-extrabold h-10 cursor-pointer px-4 py-2 bg-[#FF4100] rounded-full disabled:bg-[#D3D3D3] disabled:opacity-100 disabled:text-white w-[343px]"
        >
          {formatMessage({
            id: "step.next",
          })}
        </Button>
      )}
    </div>
  );
}
