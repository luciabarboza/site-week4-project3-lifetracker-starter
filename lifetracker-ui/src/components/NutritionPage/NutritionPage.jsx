
import React, { useState } from "react";
import "./NutritionPage.css";
import axios from "axios";
import "./NutritionPage.css"

const NutritionPage = ({onSave}) => {
// may or may not need to add categories, id, user_id, created at
  const [foodname, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [calories, setCalories] = useState("");
  const [image_url, setImageURL] = useState("");
  const [category, setCategory] = useState("")


  const handleSave = (e) => {
    e.preventDefault();
    // Error onLogin is not defined...
    onSave(foodname,quantity,calories,image_url,category);
  }

  return (
    <div className="nutrition-container">
      
      <h2>Record Nutrition</h2>
      {/* {error && <p className="error-message">{error}</p>} */}
      <form onSubmit={handleSave}>
        
        <label>Name:</label>
        <input
          type="text"
          value={foodname}
          placeholder="Add New Food"
          onChange={(e) => setFoodName(e.target.value)}
          required
        />
        
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          placeholder="1"
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

    <label>Category:</label>
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          placeholder="Calories"
          onChange={(e) => setCalories(e.target.value)}
          required
        />

        <label>URL:</label>
        <input
          type="text"
          value={image_url}
          placeholder="Paste Image URL"
          onChange={(e) => setImageURL(e.target.value)}
          required
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
  
};

export default NutritionPage;