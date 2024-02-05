const DropdownSkeleton = () => {
  return (
    <div className="relative">
      <button className="border text-center shadow-md dark:shadow-white rounded p-4 cursor-pointer hover:opacity-70 w-full">
        Loading...
      </button>
      {/* Dropdown content */}
      <div className="absolute z-10 mt-2 bg-white dark:bg-gray-800 border rounded w-full">
        <div className="animate-pulse p-3">
          {/* Skeleton text */}
          <div className="bg-gray-300 h-6 mb-2 w-2/3 mx-auto"></div>
          {/* Skeleton items */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-gray-300 h-6 mb-2 w-5/6 mx-auto"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownSkeleton;
