import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        //Successful Login
        setLoggedIn(true);
        setLoginError("");
        console.log(data.message); //optional - display a success message
      } else {
        //Login failed
        setLoginError(data.message);
        console.log(data.message); //optional - display error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Registration function to handle registration
  const handleRegistration = async (
    firstName,
    lastName,
    email,
    password,
    username
  ) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          username,
        }),
      });

      //wait for the response
      const data = await response.json();

      if (response.ok) {
        //Registration successful
        setLoggedIn(true);
        console.log(data.message); //optional - display a success message
      } else {
        //REgistration failed
        console.log(data.message); //optional - display error meesage
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <h1>Welcome to LifeTracker!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <div>
          {/* <LoginForm onLogin={handleLogin} error={loginError} />
         
          <RegistrationForm onRegister={handleRegistration} /> */}

          <h1>LifeTracker </h1>
          <h2>Helping you take back control of your world. </h2>

          <img
            className="front-image"
            src="https://lifetracker-ui-ai8e.onrender.com/assets/tracker-2a96bfd0.jpg"
          />
          <h2>Fitness</h2>
          <img
            className="background-image"
            src="https://lifetracker-ui-ai8e.onrender.com/assets/athlete-adf95577.jpg"
          />
          <h2>Food</h2>
          <img
            className="background-image"
            src="https://lifetracker-ui-ai8e.onrender.com/assets/food-e5a7cc9e.jpg"
          />
          <h2>Rest</h2>
          <img
            className="background-image"
            src="https://lifetracker.up.railway.app/assets/alarm-cff3823f.jpg"
          />

          <h2>Planner</h2>

          <img
            className="background-image"
            src="https://lifetracker-ui-ai8e.onrender.com/assets/calendar-debf6f3b.jpg"
          />

          <Router>
            <div>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
              <Routes>
                <Route
                  path="/login"
                  element={
                    <LoginForm onLogin={handleLogin} error={loginError} />
                  }
                />
                <Route
                  path="/register"
                  element={<RegistrationForm onRegister={handleRegistration} />}
                />
              </Routes>
            </div>
          </Router>
        </div>
      )}
      





    </div>
  );
};

export default App;
