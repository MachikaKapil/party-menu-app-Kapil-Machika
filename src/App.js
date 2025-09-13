import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import IngredientPage from "./pages/IngredientPage";
import dishes from "./data/dishes.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage dishes={dishes} />} />
        <Route path="/ingredients/:id" element={<IngredientPage dishes={dishes} />} />
      </Routes>
    </Router>
  );
}

export default App;

