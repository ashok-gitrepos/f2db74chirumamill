var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dumbell = require("./models/dumbell");

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dumbellRouter = require('./routes/dumbell');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
  
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dumbell', dumbellRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);



async function recreateDB(){
  // Delete everything
  await dumbell.deleteMany();
  let instance1 = new
 dumbell({Dumbell_brand:"Rouge", Dumbell_material:'plaster',Dumbell_weight:5});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First dumbell object saved")
  });
  let instance2 = new
  dumbell({Dumbell_brand:"ironmaster", Dumbell_material:'iron',Dumbell_weight:10});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second dumbell object saved")
  });
  let instance3 = new
   dumbell({Dumbell_brand:"CAP", Dumbell_material:'sand',Dumbell_weight:15});
   instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third dumbell object saved")
  });
 }
 let reseed = true;
 if (reseed) { recreateDB();}




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
