import { useNavigate } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharactersGrid = ({ characters }) => {
  const navigate = useNavigate();
  console.log(characters);
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
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
