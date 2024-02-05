const SkeletonScreen = () => {
  const brands = ['Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5', 'Brand6'];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="border text-center shadow-md dark:shadow-white rounded p-8 cursor-pointer hover:opacity-70"
        >
          <div className="animate-pulse">
            <div className="bg-gray-300 h-6 mb-4 w-2/3 mx-auto"></div>
            <div className="bg-gray-300 h-32 mb-4 w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonScreen;
