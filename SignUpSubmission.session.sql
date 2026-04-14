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