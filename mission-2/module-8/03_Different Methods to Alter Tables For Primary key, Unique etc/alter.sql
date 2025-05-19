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

-- do unique user_age

ALTER TABLE person
DROP constraint unique_person_user_age;
ALTER TABLE person DROP CONSTRAINT person_pkey;

ALTER TABLE person
ADD constraint pk_person_user_age PRIMARY KEY(user_age);
ALTER TABLE person
drop constraint pk_person_user_age;

-- drop 

ALTER TABLE person
ADD constraint unique_person_user_age UNIQUE(user_age);
-- insert data to the table
-- INSERT INTO person VALUES(7, 'harris', 20, 'harris@gmail.com')


-- truncate

TRUNCATE TABLE person;