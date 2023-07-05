import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home"

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



          <BrowserRouter>
            <div>
              <Navbar/>
              

              <Routes>
                <Route path="/" element ={<Home/>}/>
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
          </BrowserRouter>
        </div>
      )}
      





    </div>
  );
};

export default App;
