CREATE DATABASE qanda;

\c qanda;

CREATE TABLE users (
  id serial PRIMARY KEY,
  name VARCHAR,
  email VARCHAR
);

CREATE TABLE questions (
  id serial PRIMARY KEY,
  product_id INT,
  body VARCHAR,
  date_written BIGINT,
  userId INT REFERENCES users (id),
  reported INT,
  helpful INT
);

CREATE TABLE answers (
  id serial PRIMARY KEY,
  question_id INT REFERENCES questions (id),
  body VARCHAR,
  date_written BIGINT,
  userId INT REFERENCES users (id),
  reported INT,
  helpful INT
);

CREATE TABLE answers_photos (
  id serial PRIMARY KEY,
  answer_id INT REFERENCES answers (id),
  url VARCHAR
);

CREATE TABLE questions_temp (
  id serial PRIMARY KEY,
  product_id INT,
  body VARCHAR,
  date_written BIGINT,
  name VARCHAR,
  email VARCHAR,
  reported INT,
  helpful INT
);

COPY questions_temp FROM '/Users/miguelbuenviaje/SDC/q_and_a_CSV/questions.csv' DELIMITER ',' CSV HEADER;