

import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ onRegister }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(firstName,lastName, email, password,username);
  };

  return (
    <>
      <div className="registration-form-container">


        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            required
          />

<label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            required
          />

          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;