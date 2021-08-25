var express = require('express');
var router = express.Router();
var conn = require('../db');
var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
  sess=req.session;
  if(sess.user){
    var news_qry = "select * from news_post limit 7";
    var job_qry ="select * from jobintern_post limit 4";
    var event_qry = "select * from event_post limit 4";
    var need_qry = "select personal_info.profile_pic_path, personal_info.name, personal_info.class_yr, need_post.msg from need_post inner join personal_info on need_post.user_id=personal_info.user_id limit 4";
    conn.query(news_qry,function(err, result){
      if(err) throw err;
      else{
        conn.query(job_qry,function(err, result2){
          if(err) throw err;
          else{
            conn.query(event_qry,function(err, result3){
              if(err) throw err;
              else{
                conn.query(need_qry,function(err, result4){
                  if(err) throw err;
                  else{
                    res.render('home', {title: 'Home',news_data: result,job_data: result2,event_data: result3,need_data: result4});
                  }
                });
              }
            });
          }
        });
      }
    });
  }else{
    res.redirect('http://localhost:3000/signin');
  }
});

module.exports = router;
