import React from "react";

const CommonProductSkeleton = () => {
  return (
    <div className="w-full animate-pulse mt-5">
      {/* Image Skeleton */}
      <div className="w-full h-[250px] bg-gray-200 rounded-md relative">
        <div className="absolute top-3 left-3 w-12 h-5 bg-gray-300 rounded" />
        <div className="absolute top-3 right-3 space-y-2">
          <div className="w-9 h-9 bg-gray-300 rounded-full" />
          <div className="w-9 h-9 bg-gray-300 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gray-300" />
      </div>

      {/* Text Skeleton */}
      <div className="flex flex-col items-start gap-y-3 mt-4">
        <div className="h-5 bg-gray-300 w-3/4 rounded" />
        <div className="h-5 bg-gray-300 w-1/2 rounded" />
        <div className="flex gap-2 items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-300 rounded" />
          ))}
          <div className="w-12 h-4 bg-gray-300 rounded ml-2" />
        </div>
      </div>
    </div>
  );
};

export default CommonProductSkeleton;
