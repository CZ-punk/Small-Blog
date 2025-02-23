const CategoryService = require('../service/category-service');
const statusCode = require('../modules/statusCode');
const { success, fail } = require('../modules/util');

exports.getCategories = async (req, res) => {
    try {
        // let queryParams = req.query;
        let rows = await CategoryService.getCategories();
        return res
            .status(statusCode.OK)
            .send(success(statusCode.OK, rows));

    } catch (err) {
        console.error(err);
        return res
            .status(statusCode.NOT_FOUND)
            .send(fail(statusCode.NOT_FOUND, 'Categories NOT FOUND'));
    }
}