const express = require('express');
const router = express.Router();
const BlogController = require('../controller/blog-controller');

router.post('/upload', BlogController.postBlog);
router.get('/blog-list', BlogController.getAllBlog);
router.get('/blog-list/:id', BlogController.getPost);

module.exports = router;