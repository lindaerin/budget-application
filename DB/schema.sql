DROP DATABASE IF EXISTS DB_Carton;
CREATE DATABASE DB_Carton;
USE DB_Carton;

CREATE TABLE users (
  user_id Int( 11 ) AUTO_INCREMENT,
  u_name VARCHAR(25) NOT NULL,
  u_pass VARCHAR( 10 ) NOT NULL,
  budget int(11),
  PRIMARY KEY ( user_id )
);

CREATE TABLE pantries (
  food_id Int(11) AUTO_INCREMENT,
  user_id Int( 11 ),
  food_name VARCHAR( 25),
  food_type VARCHAR( 25),
  quantity Int( 11 ),
  price Int(11),
  PRIMARY KEY ( food_id )
);

CREATE TABLE groceries (
  food_id Int(11) AUTO_INCREMENT,
  user_id Int( 11 ),
  food_name VARCHAR( 25),
  PRIMARY KEY ( food_id )
);

INSERT INTO users (u_name,u_pass) VALUES ('test','test');

INSERT INTO pantries (user_id,food_name, food_type, quantity, price) VALUES (1, "apple","fruits", 10, 10);
INSERT INTO pantries (user_id,food_name, food_type, quantity, price) VALUES (1, "kale", "vegetables", 10, 10);
INSERT INTO pantries (user_id,food_name, food_type, quantity, price) VALUES (1, "egg", "proteins", 10, 10);
INSERT INTO pantries (user_id,food_name, food_type, quantity, price) VALUES (1, "milk", "dairy", 10, 10);
INSERT INTO pantries (user_id,food_name, food_type, quantity, price) VALUES (1, "sprite", "drinks", 10, 10);
INSERT INTO pantries (user_id,food_name, food_type, quantity, price) VALUES (1, "wonderbread", "carbs", 10, 10);
INSERT INTO pantries (user_id,food_name, food_type, quantity, price) VALUES (1, "gummy bears", "others", 10, 10);
