import { SearchInput } from "@/components/ui";

export default function Navbar({ search, onSearchChange }) {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className="
      py-4
      bg-gray-100
      dark:bg-slate-800
      sticky
      top-0
      z-10
      shadow-lg
    "
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <img
            src="/Rick-and-Morty-logo.svg"
            alt="Rick and Morty"
            className="h-20 object-contain"
          />

          <div className="hidden sm:block w-full max-w-[500px] mx-5">
            <SearchInput value={search} onChange={onSearchChange} />
          </div>

          <button
            onClick={toggleDark}
            className="
              ml-4
              px-3
              py-2
              bg-gray-200
              dark:bg-gray-700
              rounded
            "
          >
            🌙
          </button>

          <div className="w-[120px]" />
        </div>
      </div>
    </header>
  );
}
