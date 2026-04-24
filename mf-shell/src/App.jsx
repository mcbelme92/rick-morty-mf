import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const CharactersApp = React.lazy(() => import("characters/CharactersApp"));
const DetailApp = React.lazy(() => import("detail/DetailApp"));

const App = () => {
  return (
    <BrowserRouter>
      <h1>Shell 🧠</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CharactersApp />} />
          <Route path="/characters" element={<CharactersApp />} />
          <Route path="/character/:id" element={<DetailApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
