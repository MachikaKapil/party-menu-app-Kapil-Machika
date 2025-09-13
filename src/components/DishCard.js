import React from "react";
import { Link } from "react-router-dom";
import "./DishCard.css";

export default function DishCard({ dish, isSelected, toggleSelect }) {
  return (
    <div className="dish-card">
      <div className="dish-info">
        <h3>
          {dish.name} {dish.type === "VEG" ? "🟢" : "🔴"}
        </h3>
        <p>{dish.description}</p>
        <Link className="ingredient-link" to={`/ingredients/${dish.id}`}>
          Ingredient
        </Link>
      </div>
      <div className="dish-actions">
        <img
          src={dish.image || "https://via.placeholder.com/90"}
          alt={dish.name}
          className="dish-img"
        />
        <button
          className={isSelected ? "remove-btn" : "add-btn"}
          onClick={() => toggleSelect(dish)}
        >
          {isSelected ? "Remove" : "Add +"}
        </button>
      </div>
    </div>
  );
}