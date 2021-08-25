var express = require('express');
var router = express.Router();
var conn = require('../db');
var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
  sess=req.session;
  if(sess.user){
    var need_qry ="select personal_info.profile_pic_path, personal_info.name, personal_info.class_yr, need_post.msg from need_post inner join personal_info on need_post.user_id=personal_info.user_id";
    conn.query(need_qry,function(err, result){
        if(err) throw err;
        else{
            res.render('allneed', {title: 'All needs',need_data: result});
        }
    });
  }else{
    res.redirect('signin');
  }
});
module.exports = router;