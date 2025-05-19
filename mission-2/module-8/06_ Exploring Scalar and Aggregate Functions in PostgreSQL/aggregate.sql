--============Aggregate functions --==============

-- 1. Numeric Aggregate Functions

-- | Function  | Description                          |
-- | --------- | ------------------------------------ |
-- | `AVG()`   | Returns the average value.           |
-- | `COUNT()` | Returns the number of input rows.    |
-- | `MAX()`   | Returns the maximum value.           |
-- | `MIN()`   | Returns the minimum value.           |
-- | `SUM()`   | Returns the sum of all input values. |

SELECT avg(age) FROM student;
SELECT MAX(age) FROM student;
SELECT count(*) FROM student; --no of rows:10

SELECT max(length(first_name)) FROM student;