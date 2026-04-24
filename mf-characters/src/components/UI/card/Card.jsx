// components/ui/Card.jsx
import React from "react";

const Card = ({ image, title, subtitle, status, onClick, children }) => {
  return (
    <div className="w-[280px] rounded-2xl p-4 bg-white dark:bg-slate-800 shadow-md hover:shadow-2xl transition">
      {/* Imagen */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover rounded-xl"
        />
      )}

      {/* Contenido */}
      <div className="mt-4 flex flex-col gap-2">
        {title && (
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
        )}

        {/* Status opcional */}
        {status && (
          <span className="text-xs font-semibold px-2 py-1 rounded w-fit bg-gray-200 text-gray-600">
            {status}
          </span>
        )}

        {/* Slot libre */}
        {children}

        {/* Acción */}
        {onClick && (
          <button
            onClick={onClick}
            className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Action
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
