var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var session = require('express-session');
router.get('/:news_id', function(req, res, next) {
    sess=req.session;
    var delete_qry = "delete from news_post where news_id= '"+ req.params.news_id +"' and user_id='"+ sess.user +"' ";
    if(sess.user){
        conn.query(delete_qry, function(err, result){
            if(err) throw err;
            else{
                res.redirect('http://localhost:3000/news_post');
            }
        });
    } else{
        res.redirect('signin');
    }
});
module.exports = router;