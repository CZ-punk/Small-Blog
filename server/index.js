require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const blog = require('./routes/blog-route');
const category = require('./routes/category-route');
app.use('/blog', blog); 
app.use('/category', category);


const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});