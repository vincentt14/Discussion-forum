import React from "react";
import { Routes, Route } from 'react-router-dom';
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import AddThreadPage from "./pages/AddThreadPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Loading />
      <div className="container">
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/addThread" element={<AddThreadPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
