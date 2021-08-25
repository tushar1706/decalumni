var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var session = require('express-session');
router.get('/', function(req, res, next) {
    sess=req.session;
    // var sqry = "select * from news_post";
    if(sess.user){
        
                res.render('photo_gallery');
    } else{
        res.redirect('signin');
    }
});
module.exports = router;