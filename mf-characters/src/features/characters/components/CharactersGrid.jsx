import CharacterCard from "@/features/characters/components/CharacterCard";
import { useNavigate } from "react-router-dom";

const CharactersGrid = ({ characters }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-4
xl:grid-cols-5
gap-6
p-8
"
    >
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          image={character.image}
          title={character.name}
          subtitle={`${character.species} • ${character.gender}`}
          description={character.location.name}
          character={character}
          navigate={navigate}
        />
      ))}
    </div>
  );
};

export default CharactersGrid;
