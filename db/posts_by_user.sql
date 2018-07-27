select * from users
join posts on posts.op_id = users.id
where op_id = $1