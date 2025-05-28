const PackageCardSkeleton = () => {
    return (
        <div className="relative mt-24 w-full max-w-[240px] sm:max-w-[220px] xs:max-w-[180px] mx-auto animate-pulse">
            {/* Skeleton image above card */}
            <div className="w-36 h-36 xs:w-28 xs:h-28 bg-gray-300 dark:bg-gray-700 rounded-full absolute -top-16 left-1/2 -translate-x-1/2" />

            {/* Card container */}
            <div className="bg-[#037956] border rounded-[15px] rounded-br-[70px] pt-16 pb-4 px-4 shadow-lg">
                {/* Veg icon skeleton */}
                <div className="w-5 h-5 bg-white/30 rounded-full mb-3" />

                {/* Title skeleton */}
                <div className="h-4 bg-white/30 rounded w-3/4 mb-2" />

                {/* Star skeletons */}
                <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-white/30 rounded" />
                    ))}
                </div>

                {/* Price skeleton */}
                <div className="h-4 bg-white/30 rounded w-1/2" />
            </div>

            {/* Arrow button skeleton */}
            <div className="absolute bottom-2 right-2 bg-[#b38c50] p-3 xs:p-2 rounded-full">
                <div className="w-5 h-5 bg-white/50 rounded" />
            </div>
        </div>
    );
};

export default PackageCardSkeleton;

export const PackageCardLoading = ({ packagePage }: { packagePage: number }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: packagePage*10 }).map((_, index) => {
                return <PackageCardSkeleton />;
            })}
        </div>
    );
};
