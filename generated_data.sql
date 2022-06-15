-- Students
INSERT INTO students (id,name,email,age,dob,department,created_at,updated_at) VALUES
                         (1,'Hrithik Sawant','hrithiksawant80@gmail.com',20,'2000-12-13','Computer Science','now()','now()'),
                         (2,'Mike Ross','mike@gmail.com',22,'1999-01-01','Computer Science','now()','now()'),
                         (3,'Ruby','ruby@gmail.com',20,'2000-12-13','Computer Science','now()','now()'),
                         (4,'Richard','richard@gmail.com',24,'1998-06-07','Computer Science','now()','now()'),
                         (5,'Erlich Bachman','erlich@gmail.com',25,'1997-08-25','Computer Science','now()','now()');

;

alter sequence students_sequence RESTART with 6;