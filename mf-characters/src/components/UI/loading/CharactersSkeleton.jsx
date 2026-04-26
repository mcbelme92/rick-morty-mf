const CharactersSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 p-6">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl bg-white shadow p-4 animate-pulse"
        >
          <div className="h-56 bg-gray-200 rounded mb-4" />

          <div className="h-6 bg-gray-200 rounded mb-3" />

          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />

          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />

          <div className="h-10 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
};

export default CharactersSkeleton;
