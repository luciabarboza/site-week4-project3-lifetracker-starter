// // import express 
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const morgan = require("morgan");
// const db = require("./pool");
// const auth = require("./routes/auth");

// // Middleware
// app.use(cors());
// app.use(morgan("dev"));
// app.use(express.json());

// // Routes
// app.use("/api/auth", auth); // Set up the authentication routes under the '/api/auth' endpoint

// // Start the server
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


"use strict"

/** Express app for Vaccine Hub */

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const { NotFoundError } = require("./utils/errors")
const config = require("./config")
const authRoutes = require("./routes/auth")

const app = express()

// enable cross-origin resource sharing for all origins for all requests
// NOTE: in production, we'll want to restrict this to only the origin
// hosting our frontend.
app.use(cors())
// parse incoming requests with JSON payloads
app.use(express.json())
// log requests info
app.use(morgan("tiny"))

// routes
app.use("api/auth", authRoutes)

// health check
app.get("/", function (req, res) {
  return res.status(200).json({
    ping: "pong",
  })
})

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError())
})

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (!config.IS_TESTING) console.error(err.stack)
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})

module.exports = app
