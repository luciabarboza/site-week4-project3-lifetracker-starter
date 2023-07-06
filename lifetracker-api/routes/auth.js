"use strict"

/** Routes for authentication. */

const express = require("express")
const User = require("../models/user")
const Nutrition = require("../models/nutrition")
const router = express.Router()
const jwt = require("jsonwebtoken")
const db = require("../db")

router.post("/login", async function (req, res, next) {
  try {
    const user = await User.authenticate(req.body)
    return res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

router.post("/register", async function (req, res, next) {
  try {
    const user = await User.register(req.body)
    console.log(user)
    const token = jwt.sign(
      // shows up not defined 
      { userId: user.id, userName: user.name },
      "mykeyfosho",
      {
        expiresIn: "1h",
      }
    );
    
    // res.status(201).json({
    //   message: "User registered successfully",
    //   token: token,
    //   user: ,
    //   });
    //  {
    //    res.status(500).json({ message: "Error registering user" });
    //   }
    //   ;
      
      return res.status(201).json({ user })
    } catch (err) {
    console.error("Error registering user:", err);
    next(err)
  }
})



// Generating and signing the JWT token 




// // Giving a token to a newly registered user 







// Routes for nutrition, may need to add them into a new file or something....

router.post("/nutrition", async function (req,res,next){
  try{
    //replace once we finish jwt token cause instead of user we will show the middleware
    const user  = await User.fetchUserByEmail(req.body.email)
    const nutrition = await Nutrition.record_nutrition_input(req.body, user)
    return res.status(201).json({nutrition})
  }
  catch (err){
    next(err)
  }
})



module.exports = router;