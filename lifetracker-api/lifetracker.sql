-- step 1 Let the user know that they're about to delete the `lifetracker` database and prompt them to confirm that is what they want.

\echo 'You are about to delete the lifetracker database. Would you like to delete and recreate lifetracker db?'
\prompt 'Return for yes or control-C to cancel > ' foo

-- step 2 Drop the `lifetracker` database and then create a new `lifetracker` database, before connecting to the `lifetracker` database.
DROP DATABASE lifetracker_dev;
CREATE DATABASE lifetracker_dev;
\connect lifetracker_dev

-- step 3 Run the `lifetracker-schema.sql` file.

\i lifetracker-schema.sql

-- follow the same steps but with test database

\echo 'Delete and recreate lifetracker_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE lifetracker_test;
CREATE DATABASE lifetracker_test;
\connect lifetracker_test

\i lifetracker-schema.sql

