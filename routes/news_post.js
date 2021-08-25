var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var uniqid = require('uniqid');
var sess;
const date = require('date-and-time');
var multer = require('multer');

var storage = multer.diskStorage({
  destination : function(req, file, cb){
      cb(null, './public/images/postpic/')
  },
  filename: function(req, file, cb){
      cb(null, file.originalname)
  }
})

var upload = multer({storage: storage})
const now  =  new Date();
var date_time = date.format(now,'DD-MM-YYYY');
/* GET users listing. */
router.get('/', function(req, res, next) {
    sess=req.session;
   //variable decleration
  if(sess.user){
        var news_qry ="select * from news_post where user_id='"+ sess.user +"'";
        conn.query(news_qry, function(err, result){
            if(err) throw err;
                else{
                    res.render('news_post', { title: 'News',data_news:result });
                }
        });
    } 
   else{
       res.redirect('http://localhost:3000/signin');
   }
});

router.post('/',upload.single('image'), function(req, res, next){
    var post_id=uniqid();
    if(req.file){
        var path ="postpic/"+req.file.filename;
        //insert query
        var post_qry = "insert into news_post values('"+ post_id +"', '"+ req.body.title +"', '"+ path +"', '"+ req.body.news +"', '"+ date_time +"', '"+ sess.user +"')" ;
        conn.query(post_qry,function(err, result){
            if(err) throw err;
            else{
                res.redirect('http://localhost:3000/news_post');
            }  
        });       
    }else{
        var post_qry = "insert into news_post values('"+ post_id +"', '"+ req.body.title +"', '"+"', '"+ req.body.news +"', '"+ date_time +"', '"+ sess.user +"')" ;
        conn.query(post_qry,function(err, result){
            if(err) throw err;
            else{
                res.redirect('news_post');
                console.log("Date:"+date_time);
            }  
        });       
    }
   
});
module.exports=router;