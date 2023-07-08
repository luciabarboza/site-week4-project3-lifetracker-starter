
import React, { useState, useEffect } from "react";
import "./NutritionPage.css";
import axios from "axios";
import "./NutritionPage.css"

const NutritionPage = ({onSave, }) => {
// may or may not need to add categories, id, user_id, created at
  const [foodname, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [calories, setCalories] = useState("");
  const [image_url, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [existingNutrition, setExistingNutrition] = useState([])



  useEffect(() => {
    fetchExistingNutrition();
  }, []);

  const fetchExistingNutrition = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/auth/nutrition");
      setExistingNutrition(response.data.nutrition);

      //calculate average calories 

     
        // Pass the average calories to the parent component



    } catch (error) {
      console.error("Error fetching existing nutrition:", error);
    }
  };


  // useEffect(() => {
  //   // Fetch existing nutrition records here (replace with your API call)
  //   const fetchExistingNutrition = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/api/auth/nutrition");
  //       setExistingNutrition(response.data.nutrition);
  //     } catch (error) {
  //       console.error("Error fetching existing nutrition:", error);
  //     }
  //   };

  //   fetchExistingNutrition();
  // }, []);

  




  const handleSave = (e) => {
    e.preventDefault();

    const handleSave = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3001/api/auth/nutrition", {
          foodname,
          quantity,
          calories,
          image_url,
          category,
        });
        console.log(response.data);
        // Clear the form fields after successful submission
        setFoodName("");
        setQuantity("");
        setCalories("");
        setImageURL("");
        setCategory("");
        // Fetch the updated nutrition records
        fetchExistingNutrition();
      } catch (error) {
        console.error("Error saving nutrition:", error);
      }
    };
    
    





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

      {/* DISPLAYING EXISTING NUTRITION RECORDS ON SCREEN */}

      <h2 className="subtitle">Existing Nutrition</h2>
      <ul className="nutrition-list">
        {existingNutrition.map((nutrition) => (
          <li key={nutrition.id} className="nutrition-item">
            Food ID: {nutrition.id} <br></br> -
            Name: {nutrition.name} <br></br> - Quantity: {nutrition.quantity} <br></br> - Category: {nutrition.category} <br></br> - Calories: {nutrition.calories} <br></br> - ImageURL: {nutrition.image_url} <br></br><br></br>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default NutritionPage;