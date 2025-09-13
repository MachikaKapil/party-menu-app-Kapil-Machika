import React, { useState } from "react";
import Tabs from "../components/Tabs";
import DishCard from "../components/DishCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import "./MenuPage.css";

export default function MenuPage({ dishes }) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);

  const toggleSelect = (dish) => {
    if (selectedDishes.find((d) => d.id === dish.id)) {
      setSelectedDishes(selectedDishes.filter((d) => d.id !== dish.id));
    } else {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const filteredDishes = dishes
    .filter((d) => d.mealType === selectedCategory)
    .filter((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((d) =>
      vegOnly ? d.type === "VEG" : nonVegOnly ? d.type === "NON-VEG" : true
    );

  const countByCategory = (cat) =>
    selectedDishes.filter((d) => d.mealType === cat).length;

  const counts = {};
  categories.forEach((cat) => (counts[cat] = countByCategory(cat)));
  const totalCount = selectedDishes.length;

  return (
    <div className="menu-container">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <Filters
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        setVegOnly={setVegOnly}
        setNonVegOnly={setNonVegOnly}
      />
      <Tabs
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        counts={counts}
      />

      {filteredDishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selectedDishes.find((d) => d.id === dish.id)}
          toggleSelect={toggleSelect}
        />
      ))}

      <div className="menu-summary">
        <p>Total Dish Selected: {totalCount}</p>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
}