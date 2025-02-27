const express = require('express');
const router = express.Router();
const CategoryController = require('../controller/category-controller');

router.get('/category-list', CategoryController.getCategories);

module.exports = router;