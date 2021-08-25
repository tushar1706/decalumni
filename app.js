var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');
var signinRouter = require('./routes/signin');
var afloginRouter = require('./routes/aflogin');
var jobinfoRouter = require('./routes/jobinfo');
var personalinfoRouter = require('./routes/personalinfo');
var privacyRouter = require('./routes/privacy');
var profileRouter = require('./routes/profile');
var propic_updateRouter = require('./routes/propic_update');
var alumnisearchRouter = require('./routes/alumnisearch');
var view_profileRouter = require('./routes/view_profile');
var news_postRouter = require('./routes/news_post');
var homeRouter = require('./routes/home');
var jobintern_postRouter = require('./routes/jobintern_post');
var event_postRouter = require('./routes/event_post');
var need_postRouter = require('./routes/need_post');
var view_newsRouter = require('./routes/view_news');
var news_deleteRouter = require('./routes/news_delete');
var news_updateRouter = require('./routes/news_update');
var event_deleteRouter = require('./routes/event_delete');
var event_updateRouter = require('./routes/event_update');
var job_deleteRouter = require('./routes/job_delete');
var job_updateRouter = require('./routes/job_update');
var need_deleteRouter = require('./routes/need_delete');
var need_updateRouter = require('./routes/need_update');
var search_branchRouter = require('./routes/search_branch');
var search_yearRouter = require('./routes/search_year');
var jobinternRouter = require('./routes/jobintern');
var initiativeRouter = require('./routes/initiative');
var payRouter = require('./routes/pay');
var allneedRouter = require('./routes/allneed');
var alleventRouter = require('./routes/allevent');
var allnewsRouter = require('./routes/allnews');
var aboutRouter = require('./routes/about');
var forgotpsRouter = require('./routes/forgotps');
var changepsRouter = require('./routes/changeps');
var photoGalleryRouter=require('./routes/photoGallery');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '0kyrnxjj',
  resave: false,
  saveUninitialized: true
}));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/aflogin', afloginRouter);
app.use('/jobinfo', jobinfoRouter);
app.use('/personalinfo', personalinfoRouter);
app.use('/privacy', privacyRouter);
app.use('/profile', profileRouter);
app.use('/propic_update', propic_updateRouter);
app.use('/alumnisearch', alumnisearchRouter);
app.use('/view_profile', view_profileRouter);
app.use('/news_post', news_postRouter);
app.use('/home', homeRouter);
app.use('/jobintern_post', jobintern_postRouter);
app.use('/event_post', event_postRouter);
app.use('/need_post', need_postRouter);
app.use('/view_news', view_newsRouter);
app.use('/news_delete', news_deleteRouter);
app.use('/news_update', news_updateRouter);
app.use('/event_delete', event_deleteRouter);
app.use('/event_update', event_updateRouter);
app.use('/job_delete', job_deleteRouter);
app.use('/job_update', job_updateRouter);
app.use('/need_delete', need_deleteRouter);
app.use('/need_update', need_updateRouter);
app.use('/search_branch', search_branchRouter);
app.use('/search_year', search_yearRouter);
app.use('/jobintern', jobinternRouter);
app.use('/initiative', initiativeRouter);
app.use('/pay', payRouter);
app.use('/allneed', allneedRouter);
app.use('/allevent', alleventRouter);
app.use('/allnews', allnewsRouter);
app.use('/about', aboutRouter);
app.use('/forgotps', forgotpsRouter);
app.use('/changeps', changepsRouter);
app.use('/photoGallery',photoGalleryRouter);

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
