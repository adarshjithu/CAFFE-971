export const ProductCardSkeleton = () => {
  return (
    <div className="relative mt-24 w-full max-w-[240px] sm:max-w-[220px] xs:max-w-[180px] mx-auto animate-pulse">
      {/* Card Skeleton */}
      <div className="bg-[#037956] text-white border rounded-[15px] rounded-br-[70px] pt-24 pb-4 px-4 shadow-lg border-white/30">
        {/* Food Type Icon Skeleton */}
        <div className="w-5 h-5 bg-white/50 rounded-full mb-2" />

        {/* Title Skeleton */}
        <div className="h-4 bg-white/40 rounded w-3/4 mt-4" />
      </div>

      {/* Image Skeleton */}
      <div className="w-32 h-32 xs:w-24 xs:h-24 rounded-full absolute -top-16 left-1/2 -translate-x-1/2 bg-white/30 border-4 border-white" />

      {/* Action Button Skeleton */}
      <div className="absolute bottom-2 right-2 bg-white/40 p-3 xs:p-2 rounded-full" />
    </div>
  );
};
