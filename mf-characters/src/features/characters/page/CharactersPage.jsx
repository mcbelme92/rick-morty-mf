import { CharactersSkeleton } from "@/components/UI/loading";
import {
  CharactersFilters,
  CharactersGrid,
} from "@/features/characters/components";
import {
  useCharacterFilters,
  useCharacters,
  useDebounce,
} from "@/features/characters/hooks";

const CharactersPage = ({ externalSearch, onClearSearch }) => {
  const { filters, handleChange, resetFilters } = useCharacterFilters();

  const handleReset = () => {
    resetFilters();
    onClearSearch?.();
  };

  const effectiveSearch = externalSearch?.trim()
    ? externalSearch
    : filters.name;
  const debouncedName = useDebounce(effectiveSearch, 500);

  const queryFilters = {
    ...filters,
    name:
      debouncedName.length >= 4 || debouncedName.length === 0
        ? debouncedName
        : "",
  };
  console.log(queryFilters.name);
  const { data, isLoading, isFetching, isError } = useCharacters(queryFilters);
  console.log({
    externalSearch,

    debouncedName,
    queryFilters,
  });

  return (
    <section className="w-full min-h-screen bg-gray-100 dark:bg-slate-800">
      <CharactersFilters
        filters={filters}
        onChange={handleChange}
        onReset={handleReset}
      />

      {isFetching && !isLoading && (
        <p className="text-center mt-4 text-gray-500">Searching...</p>
      )}

      {isLoading ? (
        <CharactersSkeleton />
      ) : isError ? (
        <div className="text-center mt-10">Error loading characters</div>
      ) : !data?.results?.length ? (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold">No characters found</h2>
        </div>
      ) : (
        <CharactersGrid characters={data.results} />
      )}
    </section>
  );
};

export default CharactersPage;
