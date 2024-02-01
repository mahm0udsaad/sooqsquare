const LoadingSideBar = async () => {

  return (
    <div className="flex flex-col w-64 bg-white dark:bg-zinc-950">
    <div className="flex items-center justify-center h-14 border-b dark:border-gray-600">
      <h2 className="text-center animate-pulse bg-gray-200 dark:bg-gray-800 py-3 text-xl font-semibold text-gray-800 dark:text-gray-200"></h2>
    </div>
    <div className="flex flex-col min-h-[75dvh] justify-between gap-4  px-4 py-2 mt-5">
     <div className="w-full">
            <div key={2} className="flex w-[85%] animate-pulse bg-gray-200 dark:bg-gray-800 py-2 mx-auto justify-between">

            </div>

            <div key={3} className="flex w-[85%] animate-pulse bg-gray-200 dark:bg-gray-800 py-2 mx-auto justify-between">
        
            </div>

            <div key={4} className="flex w-[85%] animate-pulse bg-gray-200 dark:bg-gray-800 py-2 mx-auto justify-between">
        
            </div>

           <div key={5} className="flex w-[85%] animate-pulse bg-gray-200 dark:bg-gray-800 py-2 mx-auto justify-between">
    
            </div>
        </div>
    </div>
  </div>
  );
};

export default LoadingSideBar;
