var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var sess;
/* GET users listing. */
router.get('/', function(req, res, next) {

    sess=req.session;
     //fetching data
     var sqry = "select * from personal_info where user_id= '"+ sess.user +"' ";
     var sqry2 = "select * from user_details where user_id= '"+ sess.user +"' ";
  
     var cjob_qry = "select * from 	current_job where user_id= '"+ sess.user +"' ";
     var pjob_qry = "select * from previous_job where user_id= '"+ sess.user +"' ";

    if(sess.user){
        conn.query(sqry, function(err, result){
            if(err) throw err;
            else{
                conn.query(sqry2, function(err, result2){
                    if(err) throw err;
                    else{
                        //fetch branch
                        var branch ="select * from branch where branch_code= '"+ result[0].branch_code +"' ";
                        conn.query(branch, function(err, result3){
                            if(err) throw err;
                            else{
                                conn.query(cjob_qry, function(err, cjob){
                                    if(err) throw err;
                                    else{
                                        conn.query(pjob_qry, function(err, pjob){
                                            if(err) throw err;
                                            else{
                                                res.render('profile', { title: 'Profile',personalinfo: result[0],userdtl: result2[0],branch: result3[0],current_jobinfo: cjob[0], pre_jobinfo: pjob[0] });
                                                console.log(branch[0]);
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
        
    }
    else{
        res.redirect('http://localhost:3000/signin');
    }
});

module.exports = router;