
INSERT INTO student (first_name, last_name, age, grade, course, email, dob, blood_group, country) VALUES
('Alice', 'Johnson', 19, 'A', 'Computer Science', 'alice.johnson@example.com', '2006-03-15', 'O+', 'USA'),
('Bob', 'Smith', 20, 'B', 'Physics', 'bob.smith@example.com', '2005-07-21', 'A+', 'Canada'),
('Charlie', 'Brown', 21, 'A', 'Mathematics', 'charlie.brown@example.com', '2004-09-10', 'B-', 'UK'),
('Diana', 'Prince', 22, 'A', 'History', 'diana.prince@example.com', '2003-06-04', 'AB+', 'USA'),
('Ethan', 'Hunt', 23, 'C', 'Political Science', 'ethan.hunt@example.com', '2002-11-23', 'O-', 'Australia'),
('Fiona', 'Gallagher', 19, 'B', 'Psychology', 'fiona.g@example.com', '2006-01-19', 'A-', 'UK'),
('George', 'Miller', 20, 'A', 'Biology', 'george.miller@example.com', '2005-08-25', 'B+', 'Australia'),
('Hannah', 'Lee', 21, 'B', 'English', 'hannah.lee@example.com', '2004-12-14', 'AB-', 'Singapore'),
('Ivan', 'Petrov', 24, 'C', 'Engineering', 'ivan.petrov@example.com', '2001-05-30', 'O+', 'Russia'),
('Jasmine', 'Ali', 22, 'A', 'Economics', 'jasmine.ali@example.com', '2003-10-11', 'B-', 'India'),
('Kyle', 'Nguyen', 20, 'B', 'Chemistry', 'kyle.nguyen@example.com', '2005-02-07', 'A+', 'Vietnam'),
('Lily', 'Walker', 19, 'A', 'Computer Science', 'lily.walker@example.com', '2006-04-17', 'O-', 'UK'),
('Marcus', 'Turner', 21, 'C', 'Physics', 'marcus.turner@example.com', '2004-03-29', 'AB+', 'USA'),
('Nina', 'Lopez', 20, 'B', 'Sociology', 'nina.lopez@example.com', '2005-09-05', 'A-', 'Spain'),
('Omar', 'Khan', 22, 'A', 'Engineering', 'omar.khan@example.com', '2003-07-18', 'B+', 'Pakistan'),
('Priya', 'Sharma', 23, 'B', 'Mathematics', 'priya.sharma@example.com', '2002-02-02', 'AB-', 'India'),
('Quincy', 'Jones', 24, 'C', 'History', 'quincy.jones@example.com', '2001-12-06', 'O+', 'Australia'),
('Rita', 'Fernandez', 20, 'B', 'Biology', 'rita.fernandez@example.com', '2005-06-16', 'A+', 'Mexico'),
('Sam', 'Wilson', 21, 'A', 'Political Science', 'sam.wilson@example.com', '2004-08-08', 'B-', 'USA'),
('Tina', 'Chen', 19, 'A', 'Economics', 'tina.chen@example.com', '2006-10-22', 'O-', 'China');

SELECT * FROM student
WHERE country='USA';


DELETE FROM student
WHERE grade='C' AND country='USA';

SELECT * FROM student;