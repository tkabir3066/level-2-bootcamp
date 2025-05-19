
-- create a table

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INTEGER CHECK (age>=18),
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(100),
    dob DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
)


INSERT INTO student (first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES 
('John', 'Doe', 21, 'A', 'Computer Science', 'john.doe@example.com', '2003-04-15', 'O+', 'USA'),
('Jane', 'Smith', 22, 'B', 'Mathematics', 'jane.smith@example.com', '2002-08-23', 'A-', 'Canada'),
('Alice', 'Johnson', 19, 'A', 'Physics', 'alice.johnson@example.com', '2005-02-10', 'B+', 'UK'),
('Bob', 'Brown', 20, 'C', 'Chemistry', 'bob.brown@example.com', '2004-06-30', 'AB+', 'Australia'),
('Charlie', 'Davis', 23, 'B', 'Biology', 'charlie.davis@example.com', '2001-11-12', 'O-', 'India'),
('Eva', 'Wilson', 18, 'A', 'English Literature', 'eva.wilson@example.com', '2006-01-25', 'B-', 'Germany'),
('Frank', 'Miller', 25, 'D', 'History', 'frank.miller@example.com', '1999-09-14', 'A+', 'France'),
('Grace', 'Taylor', 21, 'B', 'Economics', 'grace.taylor@example.com', '2003-03-05', 'AB-', 'Brazil'),
('Henry', 'Anderson', 22, 'A', 'Philosophy', 'henry.anderson@example.com', '2002-07-19', 'O+', 'Japan'),
('Ivy', 'Thomas', 20, 'C', 'Sociology', 'ivy.thomas@example.com', '2004-05-22', 'A-', 'South Africa');


-- to see the data of every column
SELECT * FROM student;

-- to see the data of single column
SELECT email FROM student;

-- to see the data of two or more columns

SELECT age, dob,  blood_group FROM student;

-- show korar somoy onno naam e dekhar jonno

-- SELECT email as student_email FROM student;


-- ekkhane column name dekhanor jonno double quotation use korechi
SELECT email as "Student Email" FROM student; 


-- to show the ascending order

SELECT * FROM student ORDER BY first_name ASC;
SELECT * FROM student ORDER BY age ASC;
-- to show the descending order

-- SELECT * FROM student ORDER BY first_name DESC;
SELECT * FROM student ORDER BY age DESC;
