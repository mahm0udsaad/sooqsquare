const MarketAdCardSkeleton = () => {
  return (
    <div className="w-full max-w-md flex flex-col animate-pulse">
      <div className="relative bg-gray-300 aspect-square rounded-t-lg"></div>
      <div className="h-6 bg-gray-300 my-4 rounded"></div>
      <div className="grid gap-4">
        <div className="grid gap-1">
          <div className="h-4 bg-gray-300"></div>
          <div className="h-4 bg-gray-300"></div>
          <div className="h-4 bg-gray-300"></div>
          <div className="h-4 bg-gray-300"></div>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <div className="w-[40%] h-8 bg-[#fe2635] rounded-full"></div>
        <div className="w-[40%] h-8 bg-white dark:bg-gray-800 border dark:border-white border-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default MarketAdCardSkeleton;
