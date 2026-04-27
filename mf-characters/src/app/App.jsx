import CharactersPage from "@/features/characters/page/CharactersPage";
import "../index.css";

const App = ({ searchTerm, onClearSearch }) => {
  return (
    <CharactersPage externalSearch={searchTerm} onClearSearch={onClearSearch} />
  );
};

export default App;
