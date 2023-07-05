import * as React from "react";
import "./Navbar.css";
// import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">

        <ul>
            <Link to= "/"> <img id = "home-logo" src = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"></img> </Link>
            <Link to="/">Home</Link>
            <Link to="/activity">Activity</Link>
            <Link to="/exercise">Exercise</Link>
            <Link to="/nutrition">Nutrition</Link>
            <Link to="/sleep">Sleep</Link>
            <Link to="/login">
                <button>Login</button>
              </Link>

              <Link to="/register">
                <button>Register</button>
              </Link>
        </ul>




     
     
    </nav>
  );
}
