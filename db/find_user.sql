-- 66C select query

select * from users
where users.auth_id = $1;