// const { Pool } = require("pg"); //importing pg module/depedency

// //SQL script as a string to create a table called users
// const sqlScript = `
// CREATE TABLE IF NOT EXISTS users(
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL UNIQUE,
//         password VARCHAR(255) NOT NULL
//     );
// `;

// //DB information to connect
// const pool = new Pool({
//   user: "postgres",
//   password: "postgres",
//   host: "localhost",
//   port: 5432,
//   database: "lifetracke`r",
// });

// //Execute the SQL script
// pool
//   .query(sqlScript)
//   .then(() => {
//     console.log("Table create query successfully");
//   })
//   .catch((error) => {
//     console.error("Error creating table", error);
//   });

// //export the pool to be used in a different file
// module.exports = pool;




// "use strict"

// // //database setup for life tracker

// // //Initialize a new PostgreSQL client with the `pg` package and 

// // //connect to PostgreSQL using any necessary config variables.



const { Client } = require('pg');
// //Import the `getDatabaseUri` function 
// const { getDatabaseUri } = require('../config');
const { getDatabaseUri } = require('./config');
// require('colors');

const db = new Client({ connectionString: getDatabaseUri() });
//   //     //Connect to PostgreSQL and log a message to the terminal on success or failure.

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database');

    // Perform database operations here

    // db.query('INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *',[newUser.name,newUser.email],(err,result)=>{
    //   if(err){
    //     console.log("Error doing query")
    //   }
    //   else{
    //     console.log("Inserted a new user ", result.rows[0])
    //   }
    // })

    db.end(); // Close the database connection when done
  }
});
module.exports = db

