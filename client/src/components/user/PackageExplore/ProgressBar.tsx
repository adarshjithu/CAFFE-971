import React from "react";

const MAX_VALUE = 8;

function RectangleProgressBar({ count = 0 }: { count?: number }) {
  const clampedValue = Math.min(Math.max(count, 0), MAX_VALUE);
  const progressPercent = (clampedValue / MAX_VALUE) * 100;

  const gradientStyle = {
    backgroundImage: `conic-gradient(#B38C50 0% ${progressPercent}%, transparent ${progressPercent}% 100%)`,
  };

  return (
    <div className="relative w-40 h-12">
      {/* Border progress layer */}
      <div
        className="absolute inset-0 rounded-md p-[3px]"
        style={gradientStyle}
      >
        {/* Inner white box */}
        <div className="w-full h-full rounded-md bg-[white] flex items-center justify-center select-none font-semibold text-[#B38C50] text-sm">
          Items ({clampedValue}/{MAX_VALUE})
        </div>
      </div>
    </div>
  );
}

export default RectangleProgressBar;
