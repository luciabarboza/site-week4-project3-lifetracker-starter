const { Client } = require('pg');
const { getDatabaseUri } = require('./config');
require('colors');

const db = new Client({ connectionString: getDatabaseUri() });

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
