let express = require('express');
let app = express();
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
app.use(function(req,res,next){
  setTimeout(function(){
    next();
  },2000);
});
app.get('/sliders', function (req, res) {
  res.json(sliders);
});
app.get('/lessons', function (req, res) {
  res.json(lessons);
});