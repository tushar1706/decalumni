var express = require('express');
var router = express.Router();
var conn = require('../db');
var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
  sess=req.session;
  if(sess.user){
    var job_qry ="select * from jobintern_post";
    conn.query(job_qry,function(err, result){
        if(err) throw err;
        else{
            res.render('jobintern', {title: 'Job/Internship',job_data: result});
        }
    });
  }else{
    res.redirect('signin');
  }
});
module.exports = router;