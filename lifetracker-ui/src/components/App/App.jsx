import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ActivityPage from "../ActivityPage/ActivityPage";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import "./App.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import NutritionPage from "../NutritionPage/NutritionPage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  

  useEffect(() => {
    const checkLoggedIn = () => {
      // const token = Cookies.get("token");
      // if (token) {
      //   // const decodedToken = jwtDecode(token);
      //   // setUserName(decodedToken.userName); //get username
      //   if (decodedToken.exp * 1000 > Date.now()) {
      //     setLoggedIn(true);
      //   } else {
      //     // Token has expired, log out the user
      //     handleLogout();
      //   }
      // }
    };

    checkLoggedIn();
  }, []);

  const handleSave = async (
    foodname,
    quantity,
    calories,
    image_url,
    category
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/nutrition",
        {
          foodname,
          quantity,
          calories,
          image_url,
          email: userEmail,
          category,
        }
      );
    } catch (error) {
      console.error("Issues", error);
    }
  };

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
        // const { token } = data; // Extract the token directly from the response data
        // Cookies.set("token", token);

        setLoggedIn(true);
        setLoginError("");
        console.log(data.message); // Optional - display a success message
        // console.log(jwtDecode(token))
        console.log(data.user.name);
        setUserEmail(data.user.email);
      } else {
        setLoginError(data.message);
        console.log(data.message); // Optional - display an error message
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
    username,
    category
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
          category,
        }),
      });

      //wait for the response
      const data = await response.json();

      if (response.ok) {
        const { token } = data;
        Cookies.set("token", token);
        //Registration successful
        setLoggedIn(true);
        setUserEmail(response.data.user.email);
        setUserName(response.data.user.name);
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
    Cookies.remove("token");
    setLoggedIn(false);
    setUserName("");
    window.location.href = "/"; //go to home route
  };

  return (
    <div>
      <div>
        <BrowserRouter>
          <div>
            {/* Add in the logged in conditional here  */}
            <nav>
              {/* <Link to="/" className="navbar-link">
                Home
              </Link> */}
              {/* <Link to="/" className="navbar-link">
                Home
              </Link> */}
              {/* <Link to="/login" className="navbar-link">
                Login
              </Link>
              <Link to="Register" className="navbar-link">
                Register
              </Link>  */}

              {/* WHEN USER IS LOGGED IN THEY SEE THIS  */}
              {loggedIn && (
                <>
                  <br></br> <br></br>
                  {/* <Navbar/> */}
                  THIS IS LOGGED IN USER ONLY <br></br>

                  <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
                  <ActivityPage loggedIn={loggedIn} />

                  {/* addded this  */}


                 
                </>
              )}
            </nav>

            <Routes>
              <Route
                path="/"
                element={
                  loggedIn ? (
                    <>
                      Welcome to LifeTracker!
                      <Home />
                      {/* <Home/>
                      <h1>Welcome to LifeTracker!</h1>
                      <Navbar />
                      <h5>Welcome, {userName}</h5>
                      <button onClick={handleLogout}>Logout</button> */}
                    </>
                  ) : (
                    <div className="login-registration">
                      <h3>Login or register to view your info!</h3>

                      {/* Need to add login and register buttons to the navbar here */}

                      <Navbar loggedIn={false} handleLogout={handleLogout} />

                      <Home />
                    </div>
                  )
                }
              />

              {/* <Route path="/" element ={<Home/>}/> */}
              <Route
                path="/login"
                element={<LoginForm onLogin={handleLogin} error={loginError} />}
              />
              {/* takes you to the regustration page but is not the button */}
              <Route
                path="/register"
                element={<RegistrationForm onRegister={handleRegistration} />}
              />

              <Route
                path="/nutrition"
                element={<NutritionPage onSave={handleSave} />}
              />

              <Route
                path="/activity"
                element={<ActivityPage/>}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
