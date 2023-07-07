import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ loggedIn, handleLogout }) {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">
          <img
            id="home-logo"
            src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
            alt="Home Logo"
          />
        </Link>
     
        {loggedIn ? (
          <>
            <Link to="/activity">Activity</Link>
            <Link to="/exercise">Exercise</Link>
            <Link to="/nutrition">Nutrition</Link>
            <Link to="/sleep">Sleep</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
