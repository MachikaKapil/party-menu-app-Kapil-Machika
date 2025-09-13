import React from "react";
import { useParams, Link } from "react-router-dom";
import "./IngredientPage.css";

const mockIngredients = {
  1: [
    { name: "Paneer", qty: "200g" },
    { name: "Onion", qty: "2 pcs" },
    { name: "Capsicum", qty: "1 pcs" },
    { name: "Spices", qty: "to taste" },
  ],
  2: [
    { name: "Paneer", qty: "250g" },
    { name: "Tomato", qty: "3 pcs" },
    { name: "Cream", qty: "50ml" },
  ],
};

export default function IngredientPage({ dishes }) {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) return <p>Dish not found</p>;

  return (
    <div className="ingredient-container">
      <div className="ingredient-header">
        <img
          src={
            dish.image ||
            "https://via.placeholder.com/200"
          }
          alt={dish.name}
        />
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
      </div>

      <h3>Ingredients</h3>
      <ul className="ingredient-list">
        {(mockIngredients[dish.id] || [{ name: "No data", qty: "" }]).map(
          (ing, i) => (
            <li key={i}>
              {ing.name} — {ing.qty}
            </li>
          )
        )}
      </ul>

      <Link to="/">⬅ Back to Menu</Link>
    </div>
  );
}