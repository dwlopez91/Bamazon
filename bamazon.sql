DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB; 

USE bamazonDB; 

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT, 

    product_name VARCHAR(45) NOT NULL, 

    department_name VARCHAR(45) NOT NULL,

    price DECIMAL(10,2) NOT NULL, 

    stock_quantity INT NOT NULL, 

    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vaccum", "Home", 20, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Kitchen", 30, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Couch", "Home", 1000.10, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Diamond", "Fun", 500, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CDs", "Fun", 15, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scooter", "Fun", 50, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bike Pump", "Tools", 12, 56);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Tech", 2000, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Tech", 560, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheetos", "Food", 4, 1000);


