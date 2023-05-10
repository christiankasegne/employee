DROP DATABASE IF EXISTS employee-tracker;
CREATE DATABASE employee-tracker;

USE employee-tracker;

CREATE TABLE department (
    id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT NOT NULL 
    FOREIGN KEY (roles_id) REFERENCES roles(id)
    manager_id INT 
    FOREIGN KEY (manager_id) REFERENCES manager(id)
);
