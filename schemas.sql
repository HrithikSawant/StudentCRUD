-- Students
-- DROP DATABASE IF EXISTS Students;
-- CREATE DATABASE Students;

-- users
CREATE SEQUENCE students_sequence;

CREATE TABLE IF NOT EXISTS public.students
(
    id          integer PRIMARY KEY     NOT NULL DEFAULT nextval('students_sequence'),
    name        VARCHAR(50)             NOT NULL,
    email       character varying(255)  NOT NULL,
    age         integer                 NOT NULL,
    dob         date                    NOT NULL,
    department  character varying(50)   NOT NULL,
    created_at  TIMESTAMP               NOT NULL,
    updated_at  TIMESTAMP               NOT NULL
);

ALTER SEQUENCE students_sequence
    OWNED BY students.id;
