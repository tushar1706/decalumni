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
    var event_qry ="select * from event_post where user_id='"+ sess.user +"'";
        conn.query(event_qry, function(err, result){
            if(err) throw err;
                else{
                    res.render('event_post', { title: 'News',data_event:result });
                }
        });     
   }
   else{
       res.redirect('signin');
   }
});
router.post('/', function(req, res, next){
    var post_id=uniqid();
        var post_qry = "insert into event_post values('"+ post_id +"', '"+ req.body.title +"', '"+ req.body.day +"', '"+ req.body.month +"', '"+ req.body.year +"', '"+ req.body.time +"', '"+ req.body.ampm +"', '"+ req.body.week +"', '"+ sess.user +"')" ;
        conn.query(post_qry,function(err, result){
            if(err) throw err;
            else{
                res.redirect('event_post');
            }  
        });       
   
});
module.exports=router;