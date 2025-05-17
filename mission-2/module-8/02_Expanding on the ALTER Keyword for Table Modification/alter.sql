-- Active: 1747503291940@@localhost@5432@ph

SELECT * from person;

-- add column
ALTER TABLE person
ADD COLUMN email VARCHAR(50) DEFAULT 'default@gmail.com' NOT NULL;

-- rename a column
ALTER TABLE person
RENAME COLUMN age to user_age;

-- remove a column
ALTER TABLE person
DROP COLUMN email;

-- change type of a column 
ALTER TABLE person
ALTER COLUMN username type VARCHAR(60)


-- set type of a column
ALTER TABLE person
ALTER COLUMN user_age set NOT NULL


-- drop a type from a column
ALTER TABLE person
ALTER COLUMN user_age DROP NOT NULL

-- insert data to the table
INSERT INTO person VALUES(7, 'harris', 20, 'harris@gmail.com')