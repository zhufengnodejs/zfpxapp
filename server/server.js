let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'zfpx'
}));
app.listen(3000);
let sliders = require('./mock/slider');
let lessons = require('./mock/lessons');
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
  res.header('access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', "true");
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(function (req, res, next) {
  //setTimeout(function(){
  next();
  //},2000);
});
app.get('/sliders', function (req, res) {
  res.json(sliders);
});
app.get('/lessons', function (req, res) {
  let {offset, limit} = req.query;
  let clonedLessons = JSON.parse(JSON.stringify(lessons));
  let list = clonedLessons.list;
  for (let i = 1; i <= list.length; i++) {
    list[i - 1].name = `${parseInt(offset) + i}-${list[i - 1].name}`;
  }
  res.json(clonedLessons);
});

app.post('/reg', function (req, res) {
  let user = req.body;
  if(Math.random()>.5){
    res.json({code:0,success:'注册成功',user:{mobile:'888',password:'123456'}});
  }else{
    res.json({code:1,error:'注册失败'});
  }
});
app.post('/login', function (req, res) {
  let user = req.body;
  req.session.user = user;
  if(Math.random()>.5){
    res.json({code:0,success:'登录成功',user:{mobile:'888',password:'123456'}});
  }else{
    res.json({code:1,error:'登录失败'});
  }

});