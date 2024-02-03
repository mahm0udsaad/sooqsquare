const PageSkeleton = () => {
  return (
    <main className="mx-auto w-[95%]">
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 w-11/12 mx-auto py-8">
        {/* Category Links Skeleton */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-300 w-full h-20 rounded-xl"></div>
        ))}
      </div>

      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-1/2 max-md:w-full max-md:ml-0">
          {/* Title Skeleton */}
          <div className="animate-pulse bg-gray-300 w-full h-20 rounded-xl"></div>
        </div>

        <div className="flex flex-col items-stretch lg:w-4/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="relative grid grid-cols-2 gap-4">
            {/* CreateShopSquare Skeleton */}
            <div className="animate-pulse bg-gray-300 w-full h-60 rounded-xl"></div>

            {/* QuickSell Skeleton */}
            <div className="animate-pulse bg-gray-300 w-full h-60 rounded-xl"></div>

            {/* First Image Skeleton */}
            <div className="animate-pulse bg-gray-300 w-full h-60 rounded-xl relative">
              <div className="absolute top-0 left-0 p-4">
                <div className="animate-pulse bg-gray-400 w-40 h-8 mb-4"></div>
                <div className="animate-pulse bg-gray-400 w-24 h-4 mb-4"></div>
                <div className="animate-pulse bg-gray-400 w-20 h-8"></div>
              </div>
            </div>

            {/* Second Image Skeleton */}
            <div className="animate-pulse bg-gray-300 w-full h-60 rounded-xl relative">
              <div className="absolute top-0 left-0 p-4">
                <div className="animate-pulse bg-gray-400 w-40 h-8 mb-4"></div>
                <div className="animate-pulse bg-gray-400 w-24 h-4 mb-4"></div>
                <div className="animate-pulse bg-gray-400 w-20 h-8"></div>
              </div>
            </div>
          </div>

          <div className="self-stretch mt-6 max-md:max-w-full">
            <div className="gap-x-5 flex lg:flex-row flex-col max-md:items-stretch max-md:gap-0">
              {/* Additional Content Skeleton */}
              <div className="animate-pulse bg-gray-300 w-full h-20 rounded-xl"></div>
              <div className="animate-pulse bg-gray-300 w-full h-20 rounded-xl"></div>
              {/* Add more as needed */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageSkeleton;
