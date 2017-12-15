
insert into users 
(username, email, first_name, auth_id)
values ($1, $2, $3, $4)
returning *;