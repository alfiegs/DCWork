-- CREATE TABLE categories (
--     id SERIAL PRIMARY KEY,
--     name varchar(50)
-- );

-- CREATE TABLE restaurants(
--     id SERIAl PRIMARY KEY,
--     name varchar(100),
--     category integer REFERENCES categories(id)
-- );

-- -- seeds
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
-- (DEFAULT, 'Fajitas', 11),
-- (DEFAULT, 'Pad Kee Mao', 1),
-- (DEFAULT, 'Pulled Pork', 2),
-- (DEFAULT, 'Shriro Wett', 3),
-- (DEFAULT, 'Gyro', 4),
-- (DEFAULT, 'Pizza', 5),
-- (DEFAULT, 'Brat Worst', 6),
-- (DEFAULT, 'Hamburger', 7),
-- (DEFAULT, 'Orange Chicken', 8),
-- (DEFAULT, 'Kabob', 9),
-- (DEFAULT, 'Tabuleh', 10);


-- ALTER TABLE restaurants
-- ADD foodDescription varchar(300);

-- ALTER TABLE restaurants
-- ADD price integer;

-- ALTER TABLE restaurants
-- ADD course varchar(50);

-- ALTER TABLE restaurants
-- ADD imageURL varchar(150);


CREATE TABLE album (
    id SERIAL PRIMARY KEY,
    name varchar(50)
);