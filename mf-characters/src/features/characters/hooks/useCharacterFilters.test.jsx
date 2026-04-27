import { useCharacterFilters } from "@/features/characters/hooks/useCharacterFilters";
import { act, renderHook } from "@testing-library/react";

test("changing filters resets current page", () => {
  const { result } = renderHook(() => useCharacterFilters());

  act(() => {
    result.current.setPage(7);
  });

  act(() => {
    result.current.handleChange({
      target: {
        name: "status",
        value: "Alive",
      },
    });
  });

  expect(result.current.filters.page).toBe(1);
});
