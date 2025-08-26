use intern;
-- Product Table
create  table products_divya(
 p_Id int primary key,
 p_name varchar(20) not null,
 p_price int );
insert into products_divya values (1,"Phone",25000),(2,"Laptop",45000),(3,"keyboard",2000);

-- Users Table
create  table users_divya(
u_Id int primary key,
u_name varchar(20) not null,
u_email varchar(20));
insert into users_divya values (101,"Divya","divya@gmail.com"),(102,"Ravi","ravi1@gmail.com"),(103,"Kiran","kirang@gmail.com");
Alter table users_divya add u_join date;
UPDATE users_divya set u_join='2021-09-13' where u_Id=101;
UPDATE users_divya set u_join='2022-12-09' where u_Id=102;
UPDATE users_divya set u_join='2018-11-19' where u_Id=103;
UPDATE users_divya set u_join='2017-04-02' where u_Id=104;
UPDATE users_divya set u_join='2023-05-23' where u_Id=105;
UPDATE users_divya set u_join='2025-01-20' where u_Id=106;
select * from users_divya;
select * from products_divya;

-- Items Table
create  table items_divya(
i_name varchar(20),
i_price int,
i_description varchar(20)
);
select * from items_divya;