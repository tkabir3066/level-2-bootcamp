
-- full join or full outer join

SELECT * from post
FULL JOIN "user" on post.user_id = "user".id;