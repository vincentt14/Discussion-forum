import React from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <HomePage />
    </div>
  );
};

export default App;
