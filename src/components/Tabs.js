import React from "react";
import "./Tabs.css";

export default function Tabs({ categories, selected, onSelect, counts }) {
  return (
    <div className="tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`tab-btn ${selected === cat ? "active" : ""}`}
        >
          {cat} ({counts[cat] || 0})
        </button>
      ))}
    </div>
  );
}