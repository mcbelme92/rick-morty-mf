import CharactersSkeleton from "@/components/UI/loading/CharactersSkeleton";
import CharactersGrid from "../components/CharactersGrid";
import { useCharacters } from "../hooks/useCharacters";

const CharactersPage = () => {
  const { data, isLoading, isError } = useCharacters({ page: 1 });

  if (isLoading) {
    return <CharactersSkeleton />;
  }

  if (isError) {
    return <div>Error loading characters</div>;
  }

  return (
    <section className="w-full min-h-screen bg-gray-100 dark:bg-slate-800">
      <CharactersGrid characters={data?.results ?? []} />
    </section>
  );
};

export default CharactersPage;
