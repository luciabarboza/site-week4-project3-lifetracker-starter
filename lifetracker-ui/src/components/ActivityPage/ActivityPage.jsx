import React from "react";
import NutritionPage from "../NutritionPage/NutritionPage";
import "./ActivityPage.css"
import {Link} from "react-router-dom"

const ActivityPage = () => {
  return (
    <div className="ActivityPage">


      
      <h1>Activity Feed</h1>
      <h3> Welcome back, Lucia!</h3> 
        <h3>Use any button below to record your life!</h3>

      <button>
    <Link to="/nutrition">Record Nutrition</Link>
</button>
      <br></br> <br></br>
      <button>Add Exercise</button>
      <br></br>
      <br></br>
      <button>Log Sleep</button>


      <div className="calories">
      <h2>Average Daily Calories </h2>
      {/* maybe need to add numbers here  */}
      <h2>780.2</h2>
      </div>

      <div className= "exercise">
      <h2>Total Exercise Minutes</h2>
      <h2>0.0</h2>
      </div>

      <div className="sleep">
      <h2>Average Hours of Sleep</h2>
      <h2>0.0</h2>
      <br></br> <br></br>
      </div>

      {/* probably have to do this through the database stuff */}

      <div className="more-Stats">
      <h3>More Stats</h3>
      <br></br>
      <h3> Max Calories In One Meal</h3>
      <h2>500.0</h2>
      <h3>Average Exercise Intensity</h3>
      <h2>0.0</h2>
      <h3>Total Number of Hours Slept</h3>
      <h2>0.0</h2>
      </div>

     


    </div>
  );
};

export default ActivityPage;

          
