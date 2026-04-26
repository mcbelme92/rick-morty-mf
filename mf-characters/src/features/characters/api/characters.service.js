import { client_rickmorty } from "@/features/characters/api/client_rickmorty";

export const getCharacters = (filters = {}) => {
  const params = Object.fromEntries(
    Object.entries(filters).filter(
      ([_, value]) => value !== "" && value !== undefined && value !== null,
    ),
  );

  return client_rickmorty.get("/character", { params });
};

export const getCharacterById = (id) =>
  client_rickmorty.get(`/character/${id}`);
