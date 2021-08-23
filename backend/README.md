## Login into Posgresql
psql -U postgres -h localhost

## List all Databases
/l or /list

## Create database
CREATE DATABASE somenamedb

## Create Example Table
CREATE TABLE users(
	user_id INT PRIMARY KEY,
	user_first_name VARCHAR(240) NOT NULL,
	user_last_name VARCHAR(240) NOT NULL,
	user_email VARCHAR(240) NOT NULL,
	user_password VARCHAR(240) NOT NULL
)

## Insert Values into table columns
## 1st way:
INSERT INTO users
	(user_id, user_first_name, user_last_name, user_email, user_password)
	VALUES
	(1, 'Nikola', 'Ilchovski', 'ilchovski.dev@gmail.com', '123456')

## 2nd way:
INSERT INTO users VALUES
	(2, 'Atanas', 'Velikov', 'atanas.velikov@gmail.com', '123456')
	(3, 'Rumena', 'Ilchovska', 'rumi.ilchovska.dev@gmail.com', '123456')

## Show Table
SELECT * FROM users;

## Update Values
UPDATE users SET user_last_name='Staneva' WHERE user_id=3

or

UPDATE users SET user_first_name='Rumena', user_last_name='Staneva' WHERE user_id=3

## Delete Row
DELETE FROM users WHERE user_id=2;

## Start / Stop Postgresql
brew services start postgresql
brew services stop postgresql

## Terminate all node processes (sometimes it bugs)
killall node