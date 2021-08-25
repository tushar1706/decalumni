var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var uniqid = require('uniqid');
var sess;
// sign Up page
// Next get
router.get('/', function(req, res, next) {
  sess=req.session;
  if(sess.user){
    res.redirect('home');
  }else{
    var news_qry = "select * from news_post limit 7";
    var job_qry ="select * from jobintern_post limit 4";
    var event_qry = "select * from event_post limit 4";
    var need_qry = "select personal_info.profile_pic_path, personal_info.name, personal_info.class_yr, need_post.msg from need_post inner join personal_info on need_post.user_id=personal_info.user_id";
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
                    console.log(result[0].news_title);
                    res.render('index', {title: 'Home',signin: 'Sign In', news_data: result,job_data: result2,event_data: result3,need_data: result4});
                  }
                });
              }
            });
          }
        });
      }
    });
}
});
// ndniuw
router.post('/', function(req, res, next){
  //fetch email from database
  var sql="select email from user_details where email='"+ req.body.email +"'";
  conn.query(sql, async(err, result)=>{
      let hashpsw = await bcrypt.hash(req.body.psw,8);
      if(err) throw err;
      else{
          if(result.length>0){ //check email if already exit or not
              res.render('index', { message: 'email id already exits !' });
          }
          else{
              //match password and confirm password
              if(req.body.psw==req.body.cpsw)
              {
                  var userid=uniqid();
                  var path ="profilepic/defaultpic.jpg";
                  var ins_qry="insert into user_details values('"+ userid +"','"+ req.body.email +"','"+ hashpsw +"')";
                  var personal_qry="insert into personal_info values('"+ userid +"','"+ path +"','"+ req.body.name +"','"+ req.body.gender +"','"+ req.body.clsyr +"','"+"','"+ req.body.dob +"','"+ req.body.branch +"')";
                  var ins_qry_cjob="insert into current_job values('"+ userid +"','"+"','"+"','"+"','"+"','"+"')";
                  var ins_qry_pjob="insert into previous_job values('"+ userid +"','"+"','"+"','"+"','"+"','"+"')";
                  conn.query(ins_qry,function(err, result){
                      if(err) throw err;
                      else{
                          conn.query(personal_qry,function(err, result){
                              if(err) throw err;
                              else{
                                  conn.query(ins_qry_cjob,function(err, result){
                                      if(err) throw err;
                                      else{
                                          conn.query(ins_qry_pjob,function(err, result){
                                              if(err) throw err;
                                              else{
                                                  res.redirect('signin');   
                                              }

                                          });

                                      }

                                  });
                              }
                          });
                      }
                  }); 
              } 
              else{
                  res.render('index', { message: 'password and confirm password should be same !' });
              }
          }
      }
  });
  
});
/* GET home page. */



// var express = require('express');
// var router = express.Router();
// var conn = require('../db');

/* GET users listing. */

module.exports = router;

