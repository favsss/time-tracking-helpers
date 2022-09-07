CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    type VARCHAR(255)
);

CREATE TABLE tags(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE checkins(
    id SERIAL PRIMARY KEY,
    user_id INT,
    tag_id INT,
    activity VARCHAR(255),
    hours FLOAT,
    creation_date timestamp not null default current_timestamp, 
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(tag_id) REFERENCES tags(id)
);


ALTER TABLE checkins
DROP COLUMN creation_date;

ALTER TABLE checkins
ADD creation_date timestamp not null default current_timestamp;
