CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100),
	price DECIMAL(60,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, price, stock_quantity)
VALUES 
	("Hairties", 2.00, 100), 
	("Macbook", 2000.00, 50), 
	("Himalayan Salt Lamp", 15.00, 200),
	("Bungee Chair", 26.00, 90),
	("Battlefield 1 Game", 45.00, 130),
	("Coffee Mug", 5.00, 600),
	("My Little Pony Applejack Plush Toy", 27.00, 5),
	("XBox 1", 300.00, 65),
	("Green Tea Face Wash", 17.00, 30),
	("Coffee Maker", 25.00, 270);