var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var uniqid = require('uniqid');
var sess;
const date = require('date-and-time');
const now  =  new Date();
var date_time = date.format(now,'DD-MM-YYYY');
/* GET users listing. */
router.get('/', function(req, res, next) {
    sess=req.session;
   //variable decleration
  if(sess.user){
    var job_qry ="select * from jobintern_post where user_id='"+ sess.user +"'";
    conn.query(job_qry, function(err, result){
        if(err) throw err;
            else{
                res.render('jobintern_post', { title: 'Job/Internship',data_job:result });
            }
    });     
       
   }
   else{
       res.redirect('signin');
   }
});
router.post('/', function(req, res, next){
    var post_id=uniqid();
        var post_qry = "insert into jobintern_post values('"+ post_id +"', '"+ req.body.title +"', '"+ req.body.c_name +"', '"+ req.body.loc +"', '"+ req.body.sal +"', '"+ req.body.link +"', '"+ sess.user +"')" ;
        conn.query(post_qry,function(err, result){
            if(err) throw err;
            else{
                res.redirect('jobintern_post');
            }  
        });       
   
});
module.exports=router;