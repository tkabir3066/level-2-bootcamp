-- Active: 1747503291940@@localhost@5432@ph

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);


DROP TABLE employees;

INSERT INTO employees (employee_name, department_name, salary, hire_date) VALUES
('Alice Johnson', 'Engineering', 85000.00, '2020-03-15'),
('Bob Smith', 'Sales', 62000.00, '2019-06-20'),
('Charlie Lee', 'Marketing', 70000.00, '2021-01-10'),
('Diana Green', 'Engineering', 92000.00, '2018-09-01'),
('Ethan Brown', 'HR', 58000.00, '2022-05-05'),
('Fiona Clark', 'Finance', 75000.00, '2023-02-18'),
('George White', 'Engineering', 80000.00, '2017-11-30'),
('Hannah Davis', 'Marketing', 67000.00, '2020-07-22'),
('Ian Black', 'Sales', 61000.00, '2021-10-13'),
('Julia Roberts', 'Finance', 79000.00, '2019-04-25'),
('Kevin Moore', 'Engineering', 86000.00, '2021-11-12'),
('Laura King', 'Sales', 64000.00, '2020-02-08'),
('Michael Adams', 'Marketing', 73000.00, '2018-05-30'),
('Natalie Reed', 'HR', 56000.00, '2019-12-19'),
('Oliver Turner', 'Finance', 78000.00, '2023-03-03'),
('Paula Baker', 'Engineering', 91000.00, '2022-01-14'),
('Quentin Rogers', 'Sales', 60000.00, '2020-09-07'),
('Rachel Morris', 'Marketing', 71000.00, '2021-08-23'),
('Steven Price', 'Engineering', 87000.00, '2017-10-11'),
('Tina Collins', 'HR', 59000.00, '2022-11-29'),
('Umar Patel', 'Finance', 76000.00, '2023-01-16'),
('Vanessa Lopez', 'Marketing', 69000.00, '2019-06-06'),
('William Grant', 'Sales', 65000.00, '2020-04-17'),
('Xavier Brooks', 'Engineering', 93000.00, '2021-12-01'),
('Yasmine Carter', 'HR', 57000.00, '2018-08-20'),
('Zachary Nelson', 'Finance', 80000.00, '2022-06-08'),
('Amy Stewart', 'Engineering', 88000.00, '2019-09-28'),
('Brian Edwards', 'Sales', 63000.00, '2020-01-05'),
('Cynthia Howard', 'Marketing', 74000.00, '2021-04-11'),
('David Wright', 'Engineering', 94000.00, '2023-07-13');



-- Retrieve all employees whose salary is greater than the highest salary of the HR department

-- query for HR department
SELECT max(salary) FROM employees 
WHERE department_name = 'HR';


-- query for employees for the highest salary of
SELECT * FROM employees
WHERE salary > (SELECT max(salary) FROM employees 
WHERE department_name = 'HR');