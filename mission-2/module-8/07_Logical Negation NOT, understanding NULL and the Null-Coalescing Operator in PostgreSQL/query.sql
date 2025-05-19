-- Logical Negation NOT

SELECT * from student
WHERE NOT country='USA'

-- Null

-- jader email value null tader ke show korbe
SELECT * FROM student
WHERE email is NULL;

-- jader email value null noi tader ke show korbe
SELECT * FROM student
WHERE email IS NOT NULL;


-- jodi email column e null value theke thake  then fallback hisebe 'email not provided' dekhabe
SELECT COALESCE(email, 'email not provided') FROM student;