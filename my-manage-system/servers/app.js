var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); //req.body本来为undefined, 引入此 body-parsing middleware
var cookieParser = require('cookie-parser'); //cookie格式化

var app = express();
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

//设置静态资源目录
app.use(express.static(path.join(__dirname, './dist')));

app.use('/bill', require('./routes/bill'));
app.use('/login', require('./routes/login'));

//所有访问，都指定返回 index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

//设置服务器
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  // eslint-disable-next-line no-console
  console.log('system listening at http://%s:%s', host, port);
});