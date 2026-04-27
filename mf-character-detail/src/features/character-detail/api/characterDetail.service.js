import { API } from "@/constants/constants";
import { clientRickMorty } from "./client_rickmorty";

export const getCharacterById = async (id) => {
  const { data } = await clientRickMorty.get(
    `${API.ENDPOINTS.CHARACTER}/${id}`,
  );

  return data;
};

export const getEpisodesByIds = async (ids) => {
  if (!ids?.length) return [];

  const { data } = await clientRickMorty.get(
    `${API.ENDPOINTS.EPISODE}/${ids.join(",")}`,
  );

  return Array.isArray(data) ? data : [data];
};
