import { Dumbbell } from "lucide-react";

export default function AppHeading({
  title,
  backgroundText,
}: {
  title: string;
  backgroundText: string;
}) {
  return (
    <div className="relative flex items-center justify-center h-[90px] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {/*  Mask */}
        <defs>
          <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="50%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>

          <mask id="textMask">
            <rect width="100%" height="100%" fill="url(#fadeMask)" />
          </mask>

          {/* Text stroke gradient */}
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#232425" />
          </linearGradient>
        </defs>

        {/* Text with mask */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          dy=".35em"
          fontSize="64"
          fontWeight="bold"
          fill="transparent"
          stroke="url(#grad)"
          strokeWidth="1.2"
          mask="url(#textMask)"
          className="uppercase select-none"
        >
          {backgroundText}
        </text>
      </svg>

      {/* Content */}
      <div className="translate-y-8 flex items-center gap-3 text-primary capitalize z-10">
        <Dumbbell className="w-8 h-8 rotate-45" />
        <span className="text-sm font-semibold">{title}</span>
      </div>
    </div>
  );
}
