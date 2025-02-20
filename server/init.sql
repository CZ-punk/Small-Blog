CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    header VARCHAR(255) NOT NULL,
    quote VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    md_file TEXT NOT NULL,
    image_url TEXT NOT NULL
)