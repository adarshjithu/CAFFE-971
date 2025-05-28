export const PackageDetailsSkeleton = () => {
  return (
    <div
      style={{ borderWidth: "0.5px", borderColor: "rgba(255,255,255,0.3)" }}
      className="w-full rounded-[15px] flex rounded-br-[50px] bg-[#015E43] p-4 gap-4 animate-pulse"
    >
      {/* Image */}
      <div className="h-full flex justify-center items-center">
        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-lg bg-gray-400/30" />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-around flex-1 p-2 lg:p-3 lg:ml-8">
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Pencil Button Placeholder */}
          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gray-400/30" />

          {/* Title Placeholder */}
          <div className="h-6 lg:h-8 w-32 lg:w-48 bg-gray-400/30 rounded-md" />

          {/* AddOn & Next Buttons Placeholder */}
          <div className="hidden lg:flex gap-2">
            <div className="w-20 h-6 bg-gray-400/30 rounded-md" />
            <div className="w-20 h-6 bg-gray-400/30 rounded-md" />
          </div>
        </div>

        {/* Buttons Placeholder */}
        <div className="flex gap-2 flex-wrap mt-2">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="px-6 py-2 bg-gray-400/30 rounded-lg w-fit h-6 lg:h-8" />
          ))}
        </div>
      </div>

      {/* Banner Image Placeholder */}
      <div className="hidden lg:flex">
        <div className="h-[150px] w-32 bg-gray-400/30 rounded-md" />
      </div>
    </div>
  );
};
