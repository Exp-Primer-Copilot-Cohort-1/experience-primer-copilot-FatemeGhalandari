// create web server// 2. bind port
// 3. start server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comment = require('./comment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// router setup
app.get('/', comment.index);
app.post('/create', comment.create);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});