"use strict";

const db = require("../db");
const bcrypt = require("bcrypt");
const {
  BadRequestError,
  UnprocessableEntityError,
} = require("../utils/errors");
const { validateFields } = require("../utils/validate");

const { BCRYPT_WORK_FACTOR } = require("../config");

class Nutrition {
  /**
   * Convert a nutrition from the database into a nutrition object that can be viewed publically.
   * Don't show user's password
   *
   *
   * @param {Nutrition} nutrition - nutrition from database
   * returns public user
   */
  // id, user id, foodname, category,calories, image url, created at

  static _createPublicUser(nutrition) {
    return {
      // or user.id???
      id: nutrition.id,
      quantity: nutrition.quantity,
      foodname: nutrition.name,
      category: nutrition.category,
      calories: nutrition.calories,
      image_url: nutrition.image_url,
      //   should be the authenticated user id
      user_id: nutrition.user_id,
      created_at: nutrition.created_at,
    };
  }

  //   Ensures user inputted the required information in order to store nutrition input
  // if not, it throws an error

  static async record_nutrition_input(creds, user) {
    const { foodname, category, calories, quantity, image_url } = creds;
    const requiredCreds = [
      "foodname",
      "category",
      "calories",
      "quantity",
      "image_url",
    ];
    try {
      validateFields({ required: requiredCreds, obj: creds });
    } catch (err) {
      throw new UnprocessableEntityError(
        "One of the required values was not supplied",
        err
      );
    }

    if (!foodname) {
      throw new BadRequestError("The 'name' field is required.");
    }

    const result = await db.query(
      `INSERT INTO nutrition (
            name,
            category,
            calories,
            quantity,
            image_url,
            user_id
          )
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING 
            name AS "foodname",
            user_id,
            id,
            category,
            calories,
            quantity,
            image_url,
            created_at`,
      [foodname, category, calories, quantity, image_url, user.id]
    );
  }
}

module.exports = Nutrition;