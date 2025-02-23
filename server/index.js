require("dotenv").config();
const express = require('express');
const app = express();

const blog = require('./routes/blog-route');
const category = require('./routes/category-route');
app.use('/blog', blog); 
app.use('/category', category);


const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});