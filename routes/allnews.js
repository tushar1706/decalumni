var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var session = require('express-session');
router.get('/', function(req, res, next) {
    sess=req.session;
    var sqry = "select * from news_post";
    if(sess.user){
        conn.query(sqry, function(err, result){
            if(err) throw err;
            else{
                res.render('allnews', { title: 'News',data_news: result});
            }
        });
    } else{
        res.redirect('signin');
    }
});
module.exports = router;