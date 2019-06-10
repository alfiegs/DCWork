-- CREATE TABLE student(
--     id SERIAL NOT NULL PRIMARY KEY, --generates unique indentifier key for element
--     name varchar(20), --attribute and string (only thing that can be in this column is a string)
--     website varchar(100),
--     github_username varchar,
--     points integer, --only character can be integer
--     gender char(1), --character can only be on letter
--     cohort_start_date date, --date and time
--     graduated boolean --T or F

-- )



-- INSERT INTO student VALUES (DEFAULT, 'Wilhelm', 'www.google.com', 'alfiegsantos', 0);
-- INSERT INTO student VALUES (DEFAULT, 'Franz', 'www.google.com', 'alfiegsantos', 1);
-- INSERT INTO student VALUES (DEFAULT, 'Fichte', 'www.google.com', 'alfiegsantos', 3);
-- INSERT INTO student VALUES (DEFAULT, 'Lolly', 'www.google.com', 'alfiegsantos', 9);

-- SELECT * from student WHERE points < 99 and points > 2;

-- INSERT INTO student (name, github_username) VALUES ('Michael Jackson', 'mjthriller')

-- UPDATE student SET points = 8 WHERE id = 1;

-- DELETE FROM student WHERE id = 5;

-- INSERT INTO student VALUES (DEFAULT, 'Mike', 'www.google.com', 'alfiegsantos', 100)


-- CREATE TABLE student2(
--     id SERIAL NOT NULL PRIMARY KEY, --generates unique indentifier key for element
--     name varchar(20), --attribute and string (only thing that can be in this column is a string)
--     website varchar(100),
--     github_username varchar(20) UNIQUE NOT NULL,
--     points integer DEFAULT 0 CHECK (points >= 0), --only character can be integer
--     gender varchar(1), --character can only be on letter
--     cohort_start_date date NOT NULL, --date and time
--     graduated boolean DEFAULT FALSE --T or F

-- )

-- INSERT INTO student1 VALUES (DEFAULT, 'Alfie', 'www.google.com', 'alfiegsantos', 100)


-- CREATE TABLE articles (
--     id SERIAL PRIMARY KEY,
--     name varchar(100)   
-- );

-- INSERT INTO articles VALUES
-- (DEFAULT, 'Alfie'),
-- (DEFAULT, 'Mike'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Tarek'),
-- (DEFAULT, 'Garrett'),
-- (DEFAULT, 'Glen'),
-- (DEFAULT, 'David'),
-- (DEFAULT, 'Ollie'),
-- (DEFAULT, 'Sabrina'),
-- (DEFAULT, 'Jeroen'),
-- (DEFAULT, 'Deron');


-- SELECT * FROM articles WHERE name like '%er%'
-- SELECT * FROM articles WHERE name like '%er%'

-- ALTER TABLE articles ADD lastName varchar(50);
-- ALTER TABLE articles DROP COLUMN lastName;

-- SELECT SUM(points) FROM student;
-- SELECT AVG(points) FROM student;
-- SELECT * FROM student ORDER BY points
-- SELECT * FROM student ORDER BY id DESC
-- SELECT * FROM student LIMIT 5
SELECT * FROM student LIMIT 5 OFFSET 2