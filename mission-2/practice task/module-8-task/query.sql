-- Active: 1747503291940@@localhost@5432@practice_task
CREATE TABLE student(
    _id SERIAL PRIMARY KEY,
    roll INTEGER UNIQUE,
    student_name VARCHAR(50),
    age INTEGER,
    department VARCHAR(50),
    score INTEGER,
    status VARCHAR(15),
    last_login DATE

)

SELECT * FROM student;