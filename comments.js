// create web server// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// http://localhost:3000/comments/4
// http://localhost:3000/comments/5
// http://localhost:3000/comments/6
// http://localhost:3000/comments/7

// import module
const express = require('express');
const app = express();

// import router
const comments = require('./routes/comments');
const products = require('./routes/products');

// use router
app.use('/comments', comments);
app.use('/products', products);

// run web server
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});