import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <loading />
      <div className="container">
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
