import { characters } from "@data/dummy";
import CharactersGrid from "../components/CharactersGrid";

const CharactersPage = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 dark:bg-slate-800">
      <CharactersGrid characters={characters} />
    </section>
  );
};

export default CharactersPage;
