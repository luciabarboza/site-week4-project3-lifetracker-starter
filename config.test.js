//Write tests that check to make sure that:
 //process.env.NODE_ENV is set to test when the test suite is run
 //There is an IS_TESTING variable that is exported, which should only be true if process.env.NODE_ENV is set to test



 //Write tests to ensure that certain environment variables are exported from the config.js file and can be imported:
 //PORT
 //SECRET_KEY
 //BCRYPT_WORK_FACTOR
 //IS_TESTING



 //Write tests to ensure that a getDatabaseUri function is exported from the config.js file
 //The getDatabaseUri function should:
 //Check to see if a valid process.env.DATABASE_URL environment variable exists, and return that if it does.
 //When IS_TESTING is true, the getDatabaseUri function should use the test database
 //Otherwise, it should combine the proper database environment variables into a database connection string if no process.env.DATABASE_URL environment variable exists