import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Layout from "@/components/Layout";

const USE_MF = true;

let CharactersApp;
let DetailApp;

if (USE_MF) {
  CharactersApp = React.lazy(() => import("characters/CharactersApp"));
  DetailApp = React.lazy(() => import("detail/DetailApp"));
} else {
  // 🔥 modo desarrollo local (HMR FUNCIONA)
  function LocalCharactersApp() {
    return <div>Local Characters (dev)</div>;
  }

  function LocalDetailApp() {
    return <div>Local Detail (dev)</div>;
  }

  CharactersApp = LocalCharactersApp;
  DetailApp = LocalDetailApp;
}

const App = () => {
  const [globalSearch, setGlobalSearch] = useState("");

  return (
    <BrowserRouter basename="/">
      <Layout globalSearch={globalSearch} setGlobalSearch={setGlobalSearch}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <CharactersApp
                  searchTerm={globalSearch}
                  onClearSearch={() => setGlobalSearch("")}
                />
              }
            />
            <Route path="/character/:id" element={<DetailApp />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
