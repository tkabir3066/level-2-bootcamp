SELECT * from employees;

CREATE PROCEDURE remove_emp()
LANGUAGE plpgsql
AS
$$
BEGIN

DELETE FROM employees WHERE employee_id =28;
END
$$;

CALL remove_emp()


-- using var



CREATE PROCEDURE remove_emp_var()
LANGUAGE plpgsql
AS
$$
DECLARE test_var INT;
BEGIN
SELECT employee_id INTO test_var from employees WHERE employee_id =27;
DELETE FROM employees WHERE employee_id =test_var;
END
$$;

CALL remove_emp_var()



CREATE PROCEDURE remove_emp_by_id(p_emp_id INT)
LANGUAGE plpgsql
AS
$$
DECLARE test_var INT;
BEGIN
SELECT employee_id INTO test_var from employees WHERE employee_id =p_emp_id;
DELETE FROM employees WHERE employee_id =test_var;

RAISE NOTICE 'Employee removed successfully';
END
$$;

DROP PROCEDURE remove_emp_by_id;
CALL remove_emp_by_id(25)