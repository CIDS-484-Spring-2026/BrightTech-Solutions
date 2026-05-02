CREATE DATABASE brightdb;

CREATE TABLE sign_up_info (
    id SERIAL PRIMARY KEY,
    companyName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    plan VARCHAR(100) NOT NULL,
    idNumber INT NOT NULL,
    service VARCHAR(100) NOT NULL
);

ALTER TABLE sign_up_info
ADD COLUMN adminName VARCHAR(100) NOT NULL;

CREATE TABLE comment_info (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    comment VARCHAR(500) NOT NULL
);

DELETE FROM comment_info
WHERE id IN (1, 2, 3, 4, 5, 6);