var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var session = require('express-session');
router.get('/:news_id', function(req, res, next) {
    sess=req.session;
    var sqry = "select * from news_post where news_id= '"+ req.params.news_id +"' ";
    if(sess.user){
        conn.query(sqry, function(err, result){
            if(err) throw err;
            else{
                res.render('view_news', { title: 'News',data_news: result[0] });
            }
        });
    } else{
        res.redirect('http://localhost:3000/signin');
    }
});
module.exports = router;