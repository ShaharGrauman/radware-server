var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var constantRouter = require('./routes/constant');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var attackRouter = require('./routes/attack');
var signatureRouter = require('./routes/signatures');
var roleRouter = require('./routes/roles');
var loginRouter = require('./routes/login');
var QaRouter = require('./routes/Qa');

var app = express();
// app.use(cors({ origin: 'https://radware-signatures.netlify.com', credentials: true }));
// view engine setups
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req.res,next)=>{
//   res.header()
// })

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://radware-signatures.netlify.com");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});


//// check connection with sequelize 
const db = require('./config/database');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
app.use('/constant', constantRouter);
app.use('/role', roleRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/attack', attackRouter);
app.use('/signature', signatureRouter);
app.use('/login', loginRouter);
app.use('/Qa', QaRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
