const express = require('express')
const app = express()
var fs = require("fs");
const bodyParser = require('body-parser');
var compression = require('compression');
var pageRouter = require('./routes/page.js');
var indexRouter = require('./routes/index.js');
var helmet = require('helmet');
const port = 3000;

var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'chanwoo',
  password:'1111',
  database:'job'
});
db.connect();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use( helmet({ contentSecurityPolicy: false, }) );
app.get('*', function (request, response, next) {
  fs.readdir('./data', function (error, filelist) {
    request.list = filelist;
    next();
  });
});
app.use('/', indexRouter);
app.use('/page', pageRouter);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
