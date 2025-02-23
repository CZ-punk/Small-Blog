const pool = require('../config/db.config');

exports.getCategories = async() => {
    try {
        const query = `SELECT * FROM category`;
        let data = await pool.query(query);
        return data.rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
}