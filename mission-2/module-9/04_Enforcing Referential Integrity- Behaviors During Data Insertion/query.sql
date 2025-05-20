

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


SELECT * FROM "user";


-- INSERT INTO post (title, user_id) VALUES
-- ('How to learn React fast', 1),
-- ('10 Tips for JavaScript Developers', 2),
-- ('Understanding SQL Joins', 3),
-- ('Building a REST API with Node.js', 1),
-- ('CSS Grid vs Flexbox: Which One to Use?', 2),
-- ('Deploying Apps to Vercel', 4);



INSERT INTO post (title, user_id) VALUES
('test', 2);

ALTER TABLE post 
alter COLUMN user_id set NOT NULL;
SELECT * FROM post;


-- insertion constrain on INSERT post
-- attempting to insert a post with a user ID that does not exist
-- inserting a post with a valid user ID
-- attempting to insert a post without specifying a user ID




