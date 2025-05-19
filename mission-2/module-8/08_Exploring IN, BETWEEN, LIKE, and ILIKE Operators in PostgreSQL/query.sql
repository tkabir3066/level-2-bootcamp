

-- IN operator
SELECT * FROM student
WHERE country='USA' OR country='Canada' OR country='UK';
-- alternate solution

SELECT * FROM student
WHERE country IN('USA', 'Canada','UK');

-- abar USA, Canada, UK baad e baki country gulo chai

SELECT * FROM student
WHERE country NOT IN('USA', 'Canada','UK');


-- BETWEEN operator

SELECT * FROM student
WHERE age BETWEEN 20 AND 23;


SELECT * FROM student
WHERE dob BETWEEN '2004-01-01' AND '2025-01-01' ORDER BY dob;



-- LIKE operator

-- The LIKE operator in SQL is used in a WHERE clause to search for a specified pattern in a column. It is often used with wildcard characters to match parts of a string.

SELECT * FROM student;

-- 1. Names starting with 'Jo':
SELECT * FROM student
WHERE first_name LIKE 'Jo%' --case sensitive LIKE operator er khetre


-- 2. Names ending with 'e':

SELECT * FROM student
WHERE first_name LIKE '%e'


-- 3. Names containing 'li':

SELECT * FROM student
WHERE first_name LIKE '%li%'

-- 4. Names with exactly 3 letters: (3 te underscore dite hobe)


SELECT * FROM student
WHERE first_name LIKE '___'


-- ILIKE operator

SELECT * FROM student
WHERE first_name ILIKE 'jo%' --case insensitive