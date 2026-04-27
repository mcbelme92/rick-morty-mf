import { useParams } from "react-router-dom";
import { useCharacterDetail } from "../hooks";

import CharacterInfoCard from "../components/CharacterInfoCard";
import EpisodesList from "../components/EpisodesList";

const CharacterDetailPage = () => {
  const { id } = useParams();

  const characterId = Number(id ?? 1);

  const { character, episodes, isLoading, isError } =
    useCharacterDetail(characterId);

  if (isLoading) {
    return <div className="p-8">Loading detail...</div>;
  }

  if (isError) {
    return <div className="p-8">Error loading character</div>;
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8">
        <CharacterInfoCard
          character={character}
          episodeCount={episodes.length}
        />

        <EpisodesList episodes={episodes} />
      </div>
    </div>
  );
};

export default CharacterDetailPage;
