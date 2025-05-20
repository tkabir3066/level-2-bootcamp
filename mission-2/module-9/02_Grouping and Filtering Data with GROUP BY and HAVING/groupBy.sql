
SELECT dob from student

SELECT country, count(*) ,avg(age) from student
GROUP BY country;


-- group by er data guloke filter korte hoi jebhabe

--  filter groups using HAVING to show only countries with an average age greater than 20

SELECT country, count(*) ,avg(age) from student
GROUP BY country
 HAVING avg(age) > 20;



-- count students born in each year (kon year e koto student jonjmo hoyeche ta count korte hobe)
-- SELECT dob, count(*) FROM student
-- GROUP BY dob;   //ekahane year ta ber korte extract function use korte hobe

SELECT extract(year from dob) as birth_year, count(*) FROM student
GROUP BY birth_year;