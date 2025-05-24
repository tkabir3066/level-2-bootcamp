-- Active: 1747503291940@@localhost@5432@ph


SELECT  (SELECT sum(salary) FROM employees) FROM employees;


SELECT department_name, sum(salary) as total_salary FROM employees
GROUP BY department_name;

-- using sub queries

SELECT * FROM --outer query/ main query
 (SELECT department_name, sum(salary) FROM employees
GROUP BY department_name) as sum_dept_salary; --subquery


SELECT * FROM employees
WHERE salary > (SELECT max(salary) FROM employees 
WHERE department_name = 'HR');


SELECT * FROM employees
WHERE department_name IN
(SELECT department_name FROM employees WHERE department_name LIKE '%R%');

