CREATE DATABASE VroomVroom;

USE VroomVroom;


CREATE TABLE Users (
	id INT AUTO_INCREMENT NOT NULL,
	username VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	full_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone_number VARCHAR(255) NOT NULL,
	Primary Key (id)
);

CREATE TABLE Advertisments (
	id INT AUTO_INCREMENT NOT NULL,
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	model VARCHAR(255) NOT NULL,
	engine_size VARCHAR(255) NOT NULL,
	color VARCHAR(255) NOT NULL,
	price VARCHAR(255) NOT NULL,
	year VARCHAR(255) NOT NULL,
	mileage VARCHAR(255) NOT NULL,
	user_id INT NOT NULL,
	Primary Key (id),
	FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Images (
	id INT AUTO_INCREMENT NOT NULL,
	url VARCHAR(255) NOT NULL,
	advertisment_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (advertisment_id) REFERENCES Advertisments(id)
);