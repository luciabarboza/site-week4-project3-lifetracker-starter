// import express 
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./pool");
const auth = require("./routes/auth");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth", auth); // Set up the authentication routes under the '/api/auth' endpoint

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



