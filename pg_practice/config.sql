-- CREATE TABLE categories(
--     id SERIAL PRIMARY KEY,
--     name varchar (50)
-- );

-- CREATE TABLE restaurants(
--     id SERIAL PRIMARY KEY,
--     name varchar(100),
--     category integer REFERENCES categories(id)
-- );


-- --seed data (initial data)
-- INSERT INTO categories VALUES
-- (DEFAULT, 'Thai'),
-- (DEFAULT, 'BBQ'),
-- (DEFAULT, 'Ethiopian'),
-- (DEFAULT, 'Greek'),
-- (DEFAULT, 'Italian'),
-- (DEFAULT, 'German'),
-- (DEFAULT, 'American'),
-- (DEFAULT, 'Chinese'),
-- (DEFAULT, 'Lebanese'),
-- (DEFAULT, 'Syrian'),
-- (DEFAULT, 'Mexican');

-- INSERT INTO restaurants VALUES
-- (DEFAULT, 'Fajita''s', 11),
-- (DEFAULT, 'Pad Kee Mao', 1),
-- (DEFAULT, 'Pulled Pork', 2),
-- (DEFAULT, 'Shiro Wett', 3),
-- (DEFAULT, 'Gyro', 4),
-- (DEFAULT, 'Pizza', 5),
-- (DEFAULT, 'Bratwurst', 6),
-- (DEFAULT, 'Hamburger', 7),
-- (DEFAULT, 'Orange Chicken', 8),
-- (DEFAULT, 'Kebab', 9),
-- (DEFAULT, 'Tabouleh', 10);


ALTER TABLE restaurants
ADD foodDescription varchar(3000);
ALTER TABLE restaurants
ADD price integer;
ALTER TABLE restaurants
ADD course varchar(50);
ALTER TABLE restaurants
ADD imgURL varchar(3000);