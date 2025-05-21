
INSERT INTO "user" (username) VALUES ('titash');
INSERT INTO post (title, user_id) VALUES ('this is test title of post', null);
SELECT * from "user"
JOIN post on post.user_id = "user".id;


SELECT * from post
JOIN "user" on post.user_id = "user".id;

-- ====== Left join =====
-- left join ke left outer join o likhte pari
-- using post as left
SELECT * from post
LEFT JOIN "user" on post.user_id = "user".id;
-- using "user" as left
SELECT * from "user"
LEFT JOIN post on post.user_id = "user".id;


--==== Right join ====--
-- right join ke right outer join o likhte pari
-- using post as right
SELECT * from post
RIGHT JOIN "user" on post.user_id = "user".id;


-- using "user" as right
SELECT * from "user"
RIGHT JOIN post on post.user_id = "user".id;