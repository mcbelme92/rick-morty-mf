import React from "react";
import "./index.css";

const App = () => {
  const handleClick = () => {
    console.log("Botón funcionando 🔥");
  };

  return (
    // 🔹 FONDO GLOBAL (ocupa todo)
    <div className="w-full min-h-screen bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
      {/* 🔹 CONTENIDO */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-400">Characters MF 🔥</h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          This is the Characters Microfrontend
        </p>

        <button
          onClick={handleClick}
          className="mt-4 bg-blue-500 px-6 py-2 rounded hover:bg-blue-600 transition text-white"
        >
          Test Button
        </button>
      </div>
    </div>
  );
};

export default App;
