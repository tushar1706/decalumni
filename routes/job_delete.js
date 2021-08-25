var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var session = require('express-session');
router.get('/:job_id', function(req, res, next) {
    sess=req.session;
    var delete_qry = "delete from jobintern_post where post_id= '"+ req.params.job_id +"' and user_id='"+ sess.user +"' ";
    if(sess.user){
        conn.query(delete_qry, function(err, result){
            if(err) throw err;
            else{
                res.redirect('http://localhost:3000/jobintern_post');
            }
        });
    } else{
        res.redirect('signin');
    }
});
module.exports = router;