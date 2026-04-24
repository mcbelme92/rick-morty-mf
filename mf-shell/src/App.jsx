import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";

const USE_MF = true;

let CharactersApp;
let DetailApp;

if (USE_MF) {
  CharactersApp = React.lazy(() => import("characters/CharactersApp"));
  DetailApp = React.lazy(() => import("detail/DetailApp"));
} else {
  // 🔥 modo desarrollo local (HMR FUNCIONA)
  CharactersApp = () => <div>Local Characters (dev)</div>;
  DetailApp = () => <div>Local Detail (dev)</div>;
}

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<CharactersApp />} />
            <Route path="/characters" element={<CharactersApp />} />
            <Route path="/character/:id" element={<DetailApp />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
