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
        var need_qry = "select personal_info.profile_pic_path, personal_info.name, personal_info.class_yr, need_post.post_id, need_post.msg from need_post inner join personal_info on need_post.user_id=personal_info.user_id and need_post.user_id='"+ sess.user +"'";
        conn.query(need_qry,function(err, result4){
            if(err) throw err;
            else{
                res.render('need_post', { title: 'Needs',data_need:result4 });
            }
        });
    }
   else{
       res.redirect('signin');
   }
});

router.post('/', function(req, res, next){
    var post_id=uniqid();
        var post_qry = "insert into need_post values('"+ post_id +"', '"+ req.body.description +"', '"+ sess.user +"')" ;
        conn.query(post_qry,function(err, result){
            if(err) throw err;
            else{
                res.render('need_post', {message: 'Post sucessful !' });
            }  
        });       
   
});
module.exports=router;