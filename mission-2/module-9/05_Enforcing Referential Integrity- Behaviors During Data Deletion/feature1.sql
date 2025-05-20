-- Cascading Deletion -> ON DELETE CASCADE
CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL
)

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id) ON DELETE CASCADE
)


DROP TABLE post;
DROP TABLE "user";
INSERT INTO "user" (username) VALUES ('akash'), ('batash'), ('sagor'), ('nodi');

-- Sample data for the "post" table
INSERT INTO post (title, user_id) VALUES
('How to learn React fast', 1),
('10 Tips for JavaScript Developers', 2),
('Understanding SQL Joins', 3),
('Building a REST API with Node.js', 1),
('CSS Grid vs Flexbox: Which One to Use?', 2),
('Deploying Apps to Vercel', 4);


DELETE FROM "user"
WHERE id=4;

SELECT * from "user";
SELECT * from post;