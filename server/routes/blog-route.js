const express = require('express');
const router = express.Router();
const BlogController = require('../controller/blog-controller');

router.post('/upload', BlogController.postBlog);

module.exports = router;