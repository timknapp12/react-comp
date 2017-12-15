-- create table 67C

    create table users(
    id serial primary key,
    username varchar(40),
    email varchar(40),
    first_name varchar(40),
    auth_id int
)