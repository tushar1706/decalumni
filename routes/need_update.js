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
router.get('/:need_id', function(req, res, next) {
    sess=req.session;
   //variable decleration
  if(sess.user){
        var news_qry ="select * from need_post where user_id='"+ sess.user +"' and post_id='"+ req.params.need_id +"'";
        conn.query(news_qry, function(err, result){
            if(err) throw err;
                else{
                    res.render('need_update', { title: 'Needs',data_need:result[0] });
                }
        });
    } 
   else{
       res.redirect('http://localhost:3000/signin');
   }
});

router.post('/:need_id', function(req, res, next){
        //update query
        var update_qry="update need_post set msg='"+  req.body.description +"' where user_id ='"+sess.user+"' and post_id='"+ req.params.need_id +"'";
        conn.query(update_qry,function(err, result){
            if(err) throw err;
            else{
                //res.render('event_post', {message: 'Event update sucessful !' });
                res.redirect('http://localhost:3000/need_post');
            }  
        });       
   
});
module.exports=router;