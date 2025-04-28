

function SkeletonCard() {
  return (

        <div className="w-full sm:max-w-[280px] bg-white rounded-xl shadow-md border border-gray-100 animate-pulse">
          {/* Image Skeleton */}
          <div className="h-48 bg-gray-200 rounded-t-lg"></div>
      
          {/* Info Skeleton */}
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      
      
  )
}

export default SkeletonCard
