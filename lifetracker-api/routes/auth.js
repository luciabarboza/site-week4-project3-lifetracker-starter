"use strict"

/** Routes for authentication. */

const express = require("express")
const User = require("../models/user")
const Nutrition = require("../models/nutrition")
const router = express.Router()

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
    return res.status(201).json({ user })
  } catch (err) {
    next(err)
  }
})

router.post("/nutrition", async function (req,res,next){
  try{
    const nutrition = await Nutrition.record_nutrition_input(req.body)
    return res.status(201).json({nutrition})
  }
  catch (err){
    next(err)
  }
})

module.exports = router;