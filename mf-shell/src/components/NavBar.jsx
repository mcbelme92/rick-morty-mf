import React from "react";

export default function Navbar() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <header className="py-4 bg-gray-100 dark:bg-slate-800 sticky top-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            src="/Rick-and-Morty-logo.svg"
            alt="Rick and Morty"
            className="h-20 object-contain"
          />

          {/* Search */}
          <div className="hidden sm:block w-full max-w-[500px] mx-5">
            <div className="flex border-2 border-blue-500 rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search character..."
                className="px-6 py-2 w-full bg-white text-black dark:bg-slate-800 dark:text-white outline-none"
              />

              <button className="bg-blue-500 text-white text-[22px] px-4 grid place-items-center hover:bg-blue-600">
                🔍
              </button>
            </div>
          </div>
          <button
            onClick={toggleDark}
            className="ml-4 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
          >
            🌙
          </button>

          <div className="w-[120px]"></div>
        </div>
      </div>
    </header>
  );
}
