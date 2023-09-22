CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary DECIMAL(9, 2) DEFAULT 425.00,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee (name, salary) VALUES ('Juan', 1200.67), ('Ximena', 1800.15), ('Felipe', 1300.73), ('Pablo', 1600.00);