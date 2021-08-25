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
router.get('/:news_id', function(req, res, next) {
    sess=req.session;
   //variable decleration
  if(sess.user){
        var news_qry ="select * from news_post where user_id='"+ sess.user +"' and news_id='"+ req.params.news_id +"'";
        conn.query(news_qry, function(err, result){
            if(err) throw err;
                else{
                    res.render('news_update', { title: 'News',data_news:result[0] });
                }
        });
    } 
   else{
       res.redirect('http://localhost:3000/signin');
   }
});

router.post('/:news_id',upload.single('image'), function(req, res, next){
    var post_id=uniqid();
    if(req.file){
        var path ="postpic/"+req.file.filename;
        //insert query
        var update_qry="update news_post set news_title='"+  req.body.title +"', pic_path='"+ path +"', news_body='"+ req.body.news +"' where user_id ='"+sess.user+"' and news_id='"+ req.params.news_id +"'";
        conn.query(update_qry,function(err, result){
            if(err) throw err;
            else{
                res.redirect('http://localhost:3000/news_post');
            }  
        });       
    }else{
        var update_qry="update news_post set news_title='"+  req.body.title +"', news_body='"+ req.body.news +"' where user_id ='"+sess.user+"' and news_id='"+ req.params.news_id +"'";
        conn.query(update_qry,function(err, result){
            if(err) throw err;
            else{
                res.redirect('http://localhost:3000/news_post');
            }  
        });       
    }
   
});
module.exports=router;