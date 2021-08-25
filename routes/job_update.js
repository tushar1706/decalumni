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
router.get('/:job_id', function(req, res, next) {
    sess=req.session;
   //variable decleration
  if(sess.user){
        var news_qry ="select * from jobintern_post where user_id='"+ sess.user +"' and post_id='"+ req.params.job_id +"'";
        conn.query(news_qry, function(err, result){
            if(err) throw err;
                else{
                    res.render('job_update', { title: 'Job/Internship',data_job:result[0] });
                }
        });
    } 
   else{
       res.redirect('signin');
   }
});

router.post('/:job_id', function(req, res, next){
        //update query
        var update_qry="update jobintern_post set job_title='"+  req.body.title +"', c_name='"+ req.body.c_name +"', loc='"+ req.body.loc +"', sal='"+ req.body.sal +"', apply_link='"+ req.body.link +"' where user_id ='"+ sess.user +"' and post_id='"+ req.params.job_id +"'";
        conn.query(update_qry,function(err, result){
            if(err) throw err;
            else{
                //res.render('event_post', {message: 'Event update sucessful !' });
                res.redirect('http://localhost:3000/jobintern_post');
            }  
        });       
   
});
module.exports=router;