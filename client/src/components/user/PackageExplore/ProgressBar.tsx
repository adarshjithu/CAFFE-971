import React from "react";

const MAX_VALUE = 8;

function ProgressBar({ count = 6 }: { count?: number }) {
  const clampedValue = Math.min(Math.max(count, 0), MAX_VALUE);

  const totalDash = 100;
  const progressDash = (clampedValue / MAX_VALUE) * totalDash;
  const remainingDash = 100 - progressDash;

  return (
    <div className="relative w-16 h-16">
      <svg
        className="w-full h-full"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Full background circle */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          strokeWidth="2"
          strokeDasharray="100"
        />
        {/* Full progress circle */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-[#B38C50]"
          strokeWidth="2"
          strokeDasharray={`${progressDash} ${remainingDash}`}
          strokeDashoffset="25"
          strokeLinecap="round"
        />
      </svg>

      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center select-none">
        <span className="text-sm font-semibold text-[#B38C50]">
          {clampedValue}/{MAX_VALUE}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
