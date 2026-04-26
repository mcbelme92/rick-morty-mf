import React from "react";
import "./index.css";
import { characters } from "./data/dummy";
import CharacterCard from "./components/characters/CharacterCard";
import { useNavigate } from "react-router-dom";

const App = () => {
  const handleClick = () => {
    console.log("Botón funcionando 🔥");
  };
  const navigate = useNavigate();

  return (
    // 🔹 FONDO GLOBAL (ocupa todo)
    <div className="w-full min-h-screen bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
      {/* 🔹 CONTENIDO */}
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default App;
