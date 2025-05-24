-- Active: 1747503291940@@localhost@5432@conceptual_session

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL

)


CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author_name VARCHAR(25),
    published_year INTEGER,
    price NUMERIC(6,2),
    in_stock BOOLEAN,
    publisher_id INT,
    Foreign Key (publisher_id) REFERENCES publishers(id)
);


INSERT INTO publishers (name) VALUES
('Penguin Random House'),
('HarperCollins'),
('Macmillan Publishers'),
('Simon & Schuster'),
('Hachette Book Group');



-- Sample insert statements for books table
INSERT INTO books (title, author_name, published_year, price, in_stock, publisher_id) VALUES
('The Silent River', 'Alice Monroe', 2010, 19.99, true, 1),
('Code of Shadows', 'Brian Keith', 2018, 25.50, true, 2),
('Mountains Beyond', 'Clara Hills', 2005, 14.75, false, 1),
('Journey to the East', 'David Zheng', 2020, 22.00, true, 3),
('Ocean Depths', 'Elena Cruz', 2012, 18.20, false, 2),
('The Last Algorithm', 'Frank Lin', 2023, 30.00, true, 3),
('Garden of Glass', 'Grace Poe', 2001, 16.99, false, 1),
('Digital Fortress', 'Dan Brown', 2003, 24.95, true, 2);



SELECT * FROM publishers;
SELECT * FROM books;