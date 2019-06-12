-- CREATE TABLE restaurant (
--     id SERIAL NOT NULL PRIMARY KEY,
--     restaurant_name varchar(20),
--     restaurant_address varchar(50),
--     category varchar (20)
-- );

-- CREATE TABLE reviewer (
--     id SERIAL NOT NULL PRIMARY KEY,
--     reviewer_name varchar(20),
--     email varchar(50),
--     karma integer NOT NULL
-- );

-- CREATE TABLE review (
-- id SERIAL NOT NULL PRIMARY KEY,
-- reviewer_id integer REFERENCES reviewer (id),
-- stars integer NOT NULL,
-- title varchar(100),
-- review varchar(480),
-- restaurant_id integer REFERENCES restaurant (id)
-- );


-- INSERT INTO restaurant VALUES(
--     DEFAULT, 
--     'McDonalds',
--     '555 Main',
--     'Burgers'
-- );
-- INSERT INTO restaurant VALUES(
--     DEFAULT, 
--     'Dominos',
--     '123 First',
--     'Pizza'
-- );
-- INSERT INTO restaurant VALUES(
--     DEFAULT, 
--     'Panda Fu',
--     '619 Broadway',
--     'Chinese'
-- );
-- INSERT INTO restaurant VALUES(
--     DEFAULT, 
--     'Shiva',
--     '911 Washington',
--     'Indian'
-- );
-- INSERT INTO restaurant VALUES(
--     DEFAULT, 
--     'Five Guys',
--     '333 Third',
--     'Burgers'
-- );
-- INSERT INTO restaurant VALUES(
--     DEFAULT, 
--     'Chick-Fil-A',
--     '101 Third',
--     'Sandwiches'
-- );
-- INSERT INTO restaurant VALUES(
--     DEFAULT, 
--     'Vishnu',
--     '910 Washington',
--     'Indian'
-- );

-- INSERT INTO reviewer VALUES(
--     DEFAULT,
--     'Snob',
--     'mike@mike.com',
--     1
-- );
-- INSERT INTO reviewer VALUES(
--     DEFAULT,
--     'Popular',
--     'joe@joe.com',
--     10
-- );
-- INSERT INTO reviewer VALUES(
--     DEFAULT,
--     'Middle',
--     'bill@bill.com',
--     5
-- );


-- INSERT INTO review VALUES (
-- DEFAULT,
-- 1,
-- 1,
-- 'McDonalds Sucks',
-- 'Holy crap this is the worst place Ive ever eaten',
-- 1
-- );

-- INSERT INTO review VALUES (
-- DEFAULT,
-- 2,
-- 3,
-- 'McDonalds is OK',
-- 'I would eat here again',
-- 1
-- );

-- INSERT INTO review VALUES (
-- DEFAULT,
-- 3,
-- 5,
-- 'Best Burger EVER',
-- 'I love Mickey D!',
-- 1
-- );

-- INSERT INTO review VALUES (
-- DEFAULT,
-- 1,
-- 5,
-- 'Shiva is my favorite God',
-- 'Best Indian food Ive eaten in my life',
-- 4
-- );
-- INSERT INTO review VALUES (
-- DEFAULT,
-- 1,
-- 1,
-- 'Vishnu is no Shiva',
-- 'Go to Shiva, its way better',
-- 7
-- );


--1) List all the reviews for a given restaurant given a specific restaurant ID.
-- SELECT * from review WHERE restaurant_id = 4;

--2) List all the reviews for a given restaurant, given a specific restaurant name.
SELECT * FROM review JOIN restaurant ON review.restaurant_id = 1;
