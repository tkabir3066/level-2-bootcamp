

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10, 2)
);

-- Inserting sample data into the orders table
INSERT INTO orders (customer_id, order_date, total_amount) VALUES 
    (1, '2022-01-05', 100.50),
    (2, '2022-01-07', 200.75),
    (1, '2022-01-08', 150.25),
    (3, '2022-01-10', 300.00),
    (2, '2022-01-15', 180.50),
    (3, '2022-01-20', 220.25),
    (1, '2022-01-25', 90.00),
    (2, '2022-01-28', 120.75),
    (3, '2022-02-01', 250.50),
    (1, '2022-02-05', 180.25),
    (4, '2023-07-05', 198.25);



DROP TABLE orders;
    -- 6. Find customers who have placed more than 2 orders and calculate the total amount spent by each of these customers.

    SELECT customer_id, count(*), sum(total_amount) FROM orders
    GROUP BY customer_id 
    HAVING count(*)>2;
    

--  7. Find the total amount of orders placed each month in the year 2022.

SELECT extract(MONTH FROM order_date) as month, sum(total_amount) FROM orders
WHERE extract(YEAR FROM order_date) = 2022
GROUP BY month;