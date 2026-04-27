import { getCharacters } from "@/features/characters/api/characters.service";
import { useQuery } from "@tanstack/react-query";

export function useCharacters(filters) {
  return useQuery({
    queryKey: [
      "characters",
      filters.page,
      filters.name,
      filters.status,
      filters.species,
    ],

    queryFn: async () => {
      try {
        const { data } = await getCharacters(filters);
        return data;
      } catch (error) {
        // si es 404 no es "error", solo vacío
        if (error?.response?.status === 404) {
          return {
            results: [],
            info: null,
          };
        }

        throw error;
      }
    },
    enabled: !filters.name || filters.name.length >= 3,

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
