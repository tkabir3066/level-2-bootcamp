-- LIMIT operator

-- ami chai 5 ta row er data only --first five rows
SELECT * FROM student LIMIT 5;



SELECT * FROM student
WHERE country IN('USA', 'Canada','UK') LIMIT 5; -- ei 3 ti countries er first 5 rows data chai



-- prothom 2 ta row baad diye baki rows gulor data chaile
SELECT * FROM student LIMIT 5 OFFSET 2;

-- prothom 4 ta row baad diye baki rows gulor data chaile
SELECT * FROM student LIMIT 5 OFFSET 4;


-- pagination implementation
SELECT * FROM student LIMIT 5 OFFSET 5*0;
SELECT * FROM student LIMIT 5 OFFSET 5*1;
SELECT * FROM student LIMIT 5 OFFSET 5*2;
SELECT * FROM student LIMIT 5 OFFSET 5*3;
SELECT * FROM student LIMIT 5 OFFSET 5*4;