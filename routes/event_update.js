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
router.get('/:event_id', function(req, res, next) {
    sess=req.session;
   //variable decleration
  if(sess.user){
        var news_qry ="select * from event_post where user_id='"+ sess.user +"' and post_id='"+ req.params.event_id +"'";
        conn.query(news_qry, function(err, result){
            if(err) throw err;
                else{
                    res.render('event_update', { title: 'Events',data_event:result[0] });
                }
        });
    } 
   else{
       res.redirect('signin');
   }
});

router.post('/:event_id', function(req, res, next){
        //update query
        var update_qry="update event_post set event_title='"+  req.body.title +"', det='"+ req.body.day +"', month='"+ req.body.month +"', year='"+ req.body.year +"', time='"+ req.body.time +"', ampm='"+ req.body.ampm +"', day='"+ req.body.week +"' where user_id ='"+sess.user+"' and post_id='"+ req.params.event_id +"'";
        conn.query(update_qry,function(err, result){
            if(err) throw err;
            else{
                //res.render('event_post', {message: 'Event update sucessful !' });
                res.redirect('http://localhost:3000/event_post');
            }  
        });       
   
});
module.exports=router;