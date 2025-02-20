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