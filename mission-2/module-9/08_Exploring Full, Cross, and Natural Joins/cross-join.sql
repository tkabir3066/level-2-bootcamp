

CREATE TABLE employees (
    emp_id INT,
    emp_name VARCHAR(50),
    dept_id INT
)


CREATE TABLE departments (
    dept_id INT,
    dept_name VARCHAR(50)
)


INSERT INTO employees (emp_id, emp_name, dept_id) VALUES
(1, 'Alice Johnson', 101),
(2, 'Bob Smith', 102);


INSERT INTO departments (dept_id, dept_name) VALUES (101, 'Human Resources');
INSERT INTO departments (dept_id, dept_name) VALUES (102, 'Finance');

select * from employees;
select * from departments;
-- cross join

SELECT * FROM employees
CROSS JOIN departments;


-- natural join

-- natural join er khetre 2 ta table er moddhe jodi kono common column na thake tahole postgres e thik thak perform korbe na abong cross join moto behave korbe
SELECT * FROM employees
NATURAL JOIN departments;
