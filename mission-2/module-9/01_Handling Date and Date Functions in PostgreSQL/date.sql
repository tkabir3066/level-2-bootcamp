-- Active: 1747503291940@@localhost@5432@ph

-- timezone checking
SHOW timezone; --Asia/Calcutta

SELECT now(); --2025-05-19 20:00:42.151836+05:30


CREATE TABLE timeZ(ts TIMESTAMP without time zone, tsz TIMESTAMP with time zone);

INSERT INTO timez VALUES('2025-05-19 10:45:00','2024-01-12 10:45:00');

SELECT * FROM timeZ;

-- current date

SELECT CURRENT_DATE; --2025-05-19

SELECT now()::DATE; --2025-05-19
SELECT now()::TIME; --20:11:13.821475


SELECT to_char(now(), 'yyyy/mm/dd') --2025/05/19

SELECT to_char(now(), 'dd/mm/yyyy') --19/05/2025

SELECT CURRENT_DATE - INTERVAL '1 year'; --2024-05-19 00:00:00
SELECT CURRENT_DATE - INTERVAL '1 month'; --2024-04-19 00:00:00
SELECT CURRENT_DATE - INTERVAL '1 year 2 month'; --2024-04-19 00:00:00

-- age ber korte hole

SELECT age(CURRENT_DATE, '1993-09-09');

SELECT *, age(CURRENT_DATE, dob) FROM student;

SELECT extract(YEAR FROM '2025-05-19'::DATE); --2025
SELECT extract(DAY FROM '2025-05-19'::DATE); --19
SELECT extract(MONTH FROM '2025-05-19'::DATE); --5

-- ===== type casting/coercion ==== --

SELECT 1::BOOLEAN; --true

SELECT '1'::BOOLEAN; --true

SELECT 'y'::BOOLEAN; --true

SELECT '0'::BOOLEAN; --false

SELECT 'n'::BOOLEAN; --false

SELECT 0::BOOLEAN; --false