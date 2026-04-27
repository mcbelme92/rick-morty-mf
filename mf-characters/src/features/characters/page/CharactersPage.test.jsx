import { render, screen } from "@testing-library/react";
import CharactersPage from "./CharactersPage";

jest.mock("@/components/UI/loading", () => ({
  CharactersSkeleton: () => <div>Loading...</div>,
}));

jest.mock("@/features/characters/components", () => ({
  CharactersFilters: () => <div>Filters</div>,

  CharactersGrid: ({ characters }) => (
    <div>
      Characters:
      {characters.map((c) => (
        <span key={c.id}>{c.name}</span>
      ))}
    </div>
  ),
}));

jest.mock("@/features/characters/hooks", () => ({
  useCharacterFilters: () => ({
    filters: {
      name: "",
    },
    handleChange: jest.fn(),
    resetFilters: jest.fn(),
  }),

  useDebounce: (value) => value,

  useCharacters: () => ({
    data: {
      results: [
        {
          id: 1,
          name: "Rick Sanchez",
        },
      ],
    },
    isLoading: false,
    isFetching: false,
    isError: false,
  }),
}));

describe("CharactersPage", () => {
  it("renders characters from hook", () => {
    render(<CharactersPage />);

    expect(screen.getByText(/rick sanchez/i)).toBeInTheDocument();
  });
});
