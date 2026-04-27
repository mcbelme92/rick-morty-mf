import { client_rickmorty } from "@/features/characters/api/client_rickmorty";
import { API } from "@/features/characters/api/constants";

export const getCharacters = (filters = {}) => {
  const params = Object.fromEntries(
    Object.entries(filters).filter(
      ([_, value]) => value !== "" && value !== undefined && value !== null,
    ),
  );

  return client_rickmorty.get(API.ENDPOINTS.CHARACTER, { params });
};

export const getCharacterById = (id) =>
  client_rickmorty.get(`${API.ENDPOINTS.CHARACTER}/${id}`);
