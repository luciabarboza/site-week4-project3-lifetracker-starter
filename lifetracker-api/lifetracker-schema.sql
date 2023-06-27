CREATE TABLE IF NOT EXISTS users(
    id      SERIAL PRIMARY KEY, 
    username VARCHAR (255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
    created_at TIMESTAMP NOT NULL, 
    updated_at TIMESTAMP NOT NULL


);
;


CREATE TABLE IF NOT EXISTS nutrition(
    id      SERIAL PRIMARY KEY, 
    name    VARCHAR (255) NOT NULL,
    category TEXT NOT NULL,
    calories INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    user_id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL


);
;

