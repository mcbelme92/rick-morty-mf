import React from "react";

const CharacterCard = ({ character, navigate }) => {
  const { id, name, image, status, species, gender } = character;

  return (
    <div className="w-[280px] rounded-2xl p-4 bg-white dark:bg-slate-800 shadow-md hover:shadow-2xl transition">
      {/* Imagen */}
      <img
        src={image}
        alt={name}
        className="w-full h-[220px] object-cover rounded-xl"
      />

      {/* Info */}
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
          {name}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {species} • {gender}
        </p>

        {/* Estado */}
        <span
          className={`text-xs font-semibold px-2 py-1 rounded w-fit
            ${
              status === "Alive"
                ? "bg-green-100 text-green-600"
                : status === "Dead"
                  ? "bg-red-100 text-red-600"
                  : "bg-gray-200 text-gray-600"
            }
          `}
        >
          {status}
        </span>

        {/* Botón */}
        <button
          className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          onClick={() => navigate(`/character/${character.id}`)}
        >
          View Detail
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
