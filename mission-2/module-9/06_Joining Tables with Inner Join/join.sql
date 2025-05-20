
CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL
)

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id)
) 

INSERT INTO "user" (username) VALUES ('akash'), ('batash'), ('sagor'), ('nodi');

-- Sample data for the "post" table
INSERT INTO post (title, user_id) VALUES
('How to learn React fast', 1),
('10 Tips for JavaScript Developers', 2),
('Understanding SQL Joins', 3),
('Building a REST API with Node.js', 1),
('CSS Grid vs Flexbox: Which One to Use?', 2),
('Deploying Apps to Vercel', 4);



SELECT * FROM "user";
SELECT * FROM post;

-- join the both table


-- inner join
SELECT title, username from post
JOIN "user" on post.user_id = "user".id;

-- post and user ke join korar por sob rows data gulo dekhar jonno
SELECT * from post
JOIN "user" on post.user_id = "user".id;

-- 1	How to learn React fast	                1	1	akash
-- 2	10 Tips for JavaScript Developers	    2	2	batash
-- 3	Understanding SQL Joins            	    3	3	sagor
-- 4	Building a REST API with Node.js	    1	1	akash
-- 5	CSS Grid vs Flexbox: Which One to Use?	2	2	batash
-- 6	Deploying Apps to Vercel	            4	4	nodi



-- 

SELECT post.id from post
JOIN "user" on post.user_id = "user".id;

SELECT "user".id from post
JOIN "user" on post.user_id = "user".id;


SELECT p.id from post as p
JOIN "user" on p.user_id = "user".id;