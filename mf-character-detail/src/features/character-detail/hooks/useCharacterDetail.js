import { useQuery } from "@tanstack/react-query";

import { extractEpisodeIds } from "../utils/episode.parsers";
import {
  getCharacterById,
  getEpisodesByIds,
} from "@/features/character-detail/api/characterDetail.service";

export const useCharacterDetail = (id) => {
  const characterQuery = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    enabled: !!id,
  });

  const episodeIds = characterQuery.data?.episode
    ? extractEpisodeIds(characterQuery.data.episode)
    : [];

  const episodesQuery = useQuery({
    queryKey: ["episodes", episodeIds],
    queryFn: () => getEpisodesByIds(episodeIds),
    enabled: !!episodeIds.length,
  });

  return {
    character: characterQuery.data,
    episodes: episodesQuery.data || [],

    isLoading: characterQuery.isLoading || episodesQuery.isLoading,

    isError: characterQuery.isError || episodesQuery.isError,

    isFetching: characterQuery.isFetching || episodesQuery.isFetching,
  };
};
