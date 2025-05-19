

-- ==========Scalar functions =========== --
--1. String Functions--

-- upper() convert a string to uppercase
-- lower() convert a string to lowercase
-- concat() concatenate strings
-- length(text): Returns the length of the string.
-- uppercase

SELECT upper(first_name) as firstName FROM student;

-- concat first_name and last_name

SELECT concat(first_name,' ', last_name) FROM student;

SELECT length(first_name) FROM student;


--2. Mathematical Functions

-- ABS(numeric): Returns absolute value.
-- CEIL(numeric) / CEILING(numeric): Rounds up.
-- FLOOR(numeric): Rounds down.
-- ROUND(numeric, int): Rounds to specified decimal places.
SELECT ABS(-10.5); -- 10.5
SELECT CEIL(3.14); -- 4
SELECT FLOOR(3.99); -- 3
SELECT ROUND(3.14159, 2); -- 3.14



-- 3. Date/Time Functions--
-- NOW(): Current timestamp
SELECT NOW(); -- 2025-05-18 10:30:00

-- CURRENT_DATE: Current date.
SELECT CURRENT_DATE; -- 2025-05-18

-- AGE(timestamp): Calculates age.
SELECT age('1993-09-09'); -- e.g., '25 years 4 mons 17 days'

--EXTRACT(field FROM timestamp): Extracts parts from date.
SELECT EXTRACT(YEAR FROM CURRENT_DATE); -- 2025

--4. Type Conversion Functions--

-- CAST(expression AS type) or :: operator:


--5. Conditional Functions--

-- COALESCE(value1, value2, ...): Returns the first non-null value.

-- NULLIF(value1, value2): Returns NULL if both values are equal.













