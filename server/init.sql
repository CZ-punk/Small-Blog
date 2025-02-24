CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    header VARCHAR(255) NOT NULL,
    quote VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    md_file TEXT NOT NULL,
    image_url TEXT,
    create_date timestamp with time zone DEFAULT now()
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO category (id, name, description) 
VALUES 
    (1, 'Java', 'Description 1'),
    (2, 'Python', 'Description 2'),
    (3, 'PHP', 'Description 3'),
    (4, 'React', 'Description 4'),
    (5, 'NodeJs', 'Description 5')

