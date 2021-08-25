var express = require('express');
var router = express.Router();
var conn = require('../db');
var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
  sess=req.session;
  if(sess.user){
    var event_qry ="select * from event_post";
    conn.query(event_qry,function(err, result){
        if(err) throw err;
        else{
            res.render('allevent', {title: 'Events',event_data: result});
        }
    });
  }else{
    res.redirect('signin');
  }
});
module.exports = router;