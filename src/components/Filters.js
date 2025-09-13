import React from "react";
import "./Filters.css";

export default function Filters({ vegOnly, nonVegOnly, setVegOnly, setNonVegOnly }) {
  return (
    <div className="filters">
      <label>
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={() => {
            setVegOnly(!vegOnly);
            if (!vegOnly) setNonVegOnly(false);
          }}
        />
        Veg
      </label>
      <label>
        <input
          type="checkbox"
          checked={nonVegOnly}
          onChange={() => {
            setNonVegOnly(!nonVegOnly);
            if (!nonVegOnly) setVegOnly(false);
          }}
        />
        Non-Veg
      </label>
    </div>
  );
}