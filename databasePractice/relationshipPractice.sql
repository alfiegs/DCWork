-- CREATING TABLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-- CREATE TABLE author (
--     id serial PRIMARY KEY,
--     name varchar(25)
--     );


-- CREATE TABLE article(
--     id serial PRIMARY KEY,
--     title varchar(150),
--     author_id integer REFERENCES author (id) --references ID in author table above
-- );





--POPULATING TABLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
--Making relationships between tables (article in Article table will be related to author in Author table)
--Primary key and foreign key

-- INSERT INTO author VALUES(
--     DEFAULT, 
--     'Alfie Santos'
-- );

-- INSERT INTO article VALUES(
--     DEFAULT,
--     'Living in EADO',
--     5 --this must be the same as an author table that already exists -this will fail
-- )

-- INSERT INTO article VALUES(
--     DEFAULT,
--     'Living in EADO',
--     1 --this will work, unlike above, because the ID matches the author ID in an existing author table
-- )






--ADDING DATA TO TALBES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-- INSERT INTO author VALUES
--     (DEFAULT, 'Michael Dao'),
--     (DEFAULT, 'Tarek Beb'),
--     (DEFAULT, 'Kevin Evangelista'),
--     (DEFAULT, 'Glenn Favorito'),
--     (DEFAULT, 'Ollie Vargas'),
--     (DEFAULT, 'Chris Humphrey'),
--     (DEFAULT, 'Jeroen Goddijn'),
--     (DEFAULT, 'Sabrina Goldfarb'),
--     (DEFAULT, 'Garrett Weaver'),
--     (DEFAULT, 'Deron Smith')
-- ;


-- INSERT INTO article VALUES
-- (DEFAULT, 'Why I wear nice pants', 7),
-- (DEFAULT, 'Are Coding Camps Worth the Price', 1),
-- (DEFAULT, 'Living in America', 10),
-- (DEFAULT, 'Living in Houston', 9),
-- (DEFAULT, 'Dating in Houston', 4),
-- (DEFAULT, 'What is Closure', 3),
-- (DEFAULT, 'ES6 and ES7', 5),
-- (DEFAULT, 'Javascript Interview Questions', 6),
-- (DEFAULT, 'Node Interview Questions', 7),
-- (DEFAULT, 'Module and Observer Patterns', 8)






--JOINS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
--(joins artcle and author tables, the part that overlaps in a Venn Diagram)
-- SELECT * FROM article, author WHERE article.author_id = author.id;
--OR
-- SELECT * FROM article INNER JOIN author on article.author_id = author_id;

--OUTER JOIN (LEFT, RIGHT, or FULL)
-- SELECT * FROM article RIGHT OUTER JOIN author on article.author_id = author.id;

--FULL OUTER JOIN
-- SELECT * FROM article FULL OUTER JOIN author on article.author_id = author.id;


-- --AGGREGATION
-- --How many articles has each author written?
-- SELECT
--     author.id,
--     author.name,
--     count(article.id)
-- FROM   
--     article
-- INNER JOIN
--     author on article.author_id = author.id
-- GROUP BY
--     author.id;




-- MANY TO MANY RELATIONSHIPS

-- CREATE TABLE groups (
--     id SERIAL PRIMARY KEY,
--     name varchar(100)
-- );

-- CREATE TABLE member (
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );

-- CREATE TABLE membership (
--     id SERIAL PRIMARY KEY,
--     group_id integer REFERENCES groups (id),
--     member_id integer REFERENCES member (id)
-- );

-- INSERT INTO groups VALUES
-- (DEFAULT, 'Atlanta Javascript Meetup'),
-- (DEFAULT, 'PyLadies'),
-- (DEFAULT, 'Girl Develop It'),
-- (DEFAULT, 'Atlanta Web Design Group');

-- INSERT INTO member VALUES
-- (DEFAULT, 'Alfie'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Tarek'),
-- (DEFAULT, 'Kevin'),
-- (DEFAULT, 'Glenn'),
-- (DEFAULT, 'David'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Sabrina'),
-- (DEFAULT, 'Garrett'),
-- (DEFAULT, 'Jeroen'),
-- (DEFAULT, 'Deron');

-- INSERT INTO membership VALUES
-- (DEFAULT, 1, 9),
-- (DEFAULT, 2, 9),
-- (DEFAULT, 3, 9),
-- (DEFAULT, 4, 9),
-- (DEFAULT, 1, 2),
-- (DEFAULT, 2, 2),
-- (DEFAULT, 2, 3),
-- (DEFAULT, 2, 4),
-- (DEFAULT, 3, 6),
-- (DEFAULT, 3, 7),
-- (DEFAULT, 3, 8),
-- (DEFAULT, 4, 9);


-- SELECT member.name, groups.name FROM groups 
-- INNER JOIN membership ON groups.id = membership.group_id
-- INNER JOIN member ON membership.group_id = member.id;


