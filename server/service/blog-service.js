const pool = require('../config/db.config');

exports.postBlog = async(postBody) => {
    const { header, quote, author, category, md_file, image_url} = postBody;
    console.log(postBody);
    try {
        const query = `INSERT INTO posts (header, quote, author, category, md_file, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
        const data = await pool.query(query, [header, quote, author, category, md_file, image_url]);
        return data.rows[0].id;

    } catch (err) {
        console.log(err.message);
        throw new Error('Failed to post blog');
    }
}

exports.getAllBlog = async() => {
    try {
        const query = `SELECT * FROM posts ORDER BY id DESC`;
        let data = await pool.query(query);
        return data;
    } catch (err) {
        throw new Error('Failed to Get All Posts');
    }
}

exports.getPost = async(id) => {
    try {
        const query = `SELECT * FROM posts WHERE id = $1`;
        let data = await pool.query(query, [id]);
        return data;
    } catch (err) {
        throw new Error('Failed to Get Post By Id: ' + id);
    }
}