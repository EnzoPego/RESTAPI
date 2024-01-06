CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleados(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE empleados;


INSERT INTO empleados VALUES
    (1, 'Juan', 1200),  
    (2, 'Henry', 2000),  
    (3, 'Pepe', 1700),  
    (4, 'Ana', 1600);  
