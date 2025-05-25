

CREATE VIEW dept_avg_salary
AS
SELECT department_name, avg(salary) FROM employees GROUP BY department_name;

SELECT * FROM dept_avg_salary;



CREATE VIEW test_view
AS
SELECT employee_name, salary, department_name
FROM employees
WHERE department_name IN
(SELECT department_name FROM employees WHERE department_name LIKE '%R%');


SELECT * FROM test_view;


-- simplifying complex queries 
-- improved security
-- enhanced data abstraction