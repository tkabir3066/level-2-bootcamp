
SELECT * FROM student;
SELECT country FROM student ORDER BY country ASC;

-- to show the unique country
SELECT DISTINCT country FROM student;


--unique blood groups

SELECT DISTINCT blood_group from student;

-- ====== data filtering======

-- select students from USA

SELECT * FROM student
WHERE country='USA';
-- select students with 'A' grade in physics 
SELECT * FROM student
WHERE grade='A' AND course='Physics';

--select students with a specific blood group ('A+');
SELECT * FROM student
WHERE blood_group='A+';


--select students from USA or from Australia

SELECT * FROM student
WHERE country='USA' OR country='Australia';
--select students from USA or from the Australia and age is 20

SELECT * FROM student
WHERE (country='USA' OR country='Australia') AND age=20;

-- select students older than 20 years

SELECT * FROM student
WHERE age>20;

-- select student with a grade of ('A') or ('B') in Math or Physics

SELECT * FROM student
WHERE (course = 'Math' OR course = 'Physics')
  AND (grade = 'A' OR grade = 'B');