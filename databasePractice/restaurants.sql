----CREATING A TABLE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-- CREATE TABLE restaurant (
--     id SERIAL NOT NULL PRIMARY KEY,
--     restaurant_name varchar(20),
--     distance integer,
--     stars varchar(5),
--     category varchar(20),
--     favorite_dish varchar(20),
--     takeout BOOLEAN DEFAULT FALSE,
--     last_time date
-- );

----INSERTING VALUES INTO TABLE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-- INSERT INTO restaurant VALUES (DEFAULT, 'Arrandas', 1, '***', 'Mexican', 'enchiladas', TRUE, '2019-06-01');
-- INSERT INTO restaurant VALUES (DEFAULT, 'Roostar', 5, '****', 'Vietnamese', 'banh mi', TRUE, '2019-05-21');
-- INSERT INTO restaurant VALUES (DEFAULT, 'Ramen Tatsuya', 3, '***', 'Japanese', 'ramen', TRUE, '2019-05-14');
-- INSERT INTO restaurant VALUES (DEFAULT, 'Chick-fil-a', 1, '*****', 'American', 'chicken sandwich', FALSE, '2019-05-07');
-- INSERT INTO restaurant VALUES (DEFAULT, 'Five Guys', 1, '****', 'American', 'cheeseburger', TRUE, '2019-05-01');



-- --EXERCISES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-- --1) The names of the restaurants that you gave a 5 stars to
-- SELECT * from restaurant WHERE stars = '*****';
-- SELECT restaurant_name from restaurant WHERE stars = '*****';

-- -- 2) The favorite dishes of all 5-star restaurants
-- SELECT favorite_dish from restaurant;

-- -- 3) The the id of a restaurant by a specific restaurant name, say 'Moon Tower'
-- SELECT id from restaurant WHERE restaurant_name = 'Roostar'

-- -- 4) restaurants in the category of 'BBQ'
-- SELECT * from restaurant WHERE category = 'Mexican'

-- -- 5) restaurants that do take out
-- SELECT * from restaurant WHERE takeout = TRUE;

-- -- 6) restaurants that do take out and is in the category of 'BBQ'
-- SELECT * from restaurant WHERE takeout = TRUE and category = 'Mexican'

-- -- 7) restaurants within 2 miles
-- SELECT * from restaurant WHERE distance < 2;

-- -- 8) restaurants you haven't ate at in the last week
-- SELECT * from restaurant WHERE last_time < '20190521';

-- -- 9) restaurants you haven't ate at in the last week and has 5 stars
-- SELECT * from restaurant WHERE last_time < '20190521' and stars = '*****'




--AGGREGATE EXERCISES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-- -- 1) list restaurants by the closest distance.
-- SELECT * FROM restaurant ORDER BY distance;

-- -- 2) list the top 2 restaurants by distance.
-- SELECT * FROM restaurant ORDER BY distance LIMIT 2;

-- -- 3) list the top 2 restaurants by stars.
-- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;

-- -- 4) list the top 2 restaurants by stars where the distance is less than 2 miles.
-- SELECT * FROM restaurant ORDER BY stars DESC, distance LIMIT 2;

-- -- 5) count the number of restaurants in the db.
-- SELECT COUNT(*) FROM restaurant;


-- -- 6)count the number of restaurants by category.
-- SELECT category, count(*) FROM restaurant GROUP BY category;

-- -- 7) get the average stars per restaurant by category.
-- SELECT category, AVG('stars') FROM restaurant GROUP BY category;

-- -- 8) get the max stars of a restaurant by category.
-- SELECT category, MAX(stars) FROM restaurant GROUP BY category;



--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
--NOTES

--HOW TO UPDATE
--UPDATE restaurant
--SET restaurant_name = 'Chacho''s'
--WHERE id = 1;

--Only single quotes can be used to enclose a string, not double
--To include an apostrophe in a string, use double quote