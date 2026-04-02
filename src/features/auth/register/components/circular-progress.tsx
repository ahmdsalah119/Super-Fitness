import { cn } from "@/lib/utils/utils";

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = "round",
  size = 100,
  strokeWidth,
  circleStrokeWidth = 4,
  progressStrokeWidth = 4,
}: CircularProgressProps) => {
  const radius = size / 2;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative mt-7 mb-6">
      <svg
        className="relative"
        height={size}
        style={{ transform: "rotate(270deg)" }}
        version="1.1"
        viewBox={viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-transparent", className)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
        />

        {/* Progress */}
        <circle
          className={cn("stroke-[#FF4100]", progressClassName)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={shape}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center   font-medium text-white",
            labelClassName,
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export default function CircularProgressWithLabelDemo({
  value,
  showLabel = true,
  size = 120,
  strokeWidth = 4,
  renderLabel,
}: {
  value: number;
  showLabel?: boolean;
  size?: number;
  strokeWidth?: number;
  renderLabel?: (value: number) => string;
}) {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center">
      <CircularProgress
        labelClassName="text-xl font-medium"
        showLabel={showLabel}
        size={size}
        strokeWidth={strokeWidth}
        value={value}
        renderLabel={renderLabel}
      />
    </div>
  );
}
