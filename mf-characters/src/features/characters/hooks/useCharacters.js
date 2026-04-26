import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/characters.service";

export function useCharacters(filters = {}) {
  const { page = 1, name = "", status = "", species = "" } = filters;

  return useQuery({
    queryKey: ["characters", page, name, status, species],

    queryFn: async () => {
      const { data } = await getCharacters({
        page,
        name,
        status,
        species,
      });

      return data;
    },

    placeholderData: (prev) => prev,

    retry: (count, error) => {
      if (error?.response?.status === 429) return false;
      return error?.response?.status >= 500 && count < 2;
    },
  });
}
