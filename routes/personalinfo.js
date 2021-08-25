var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var session = require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
    sess=req.session;
     //fetching data
     var sqry = "select * from personal_info where user_id= '"+ sess.user +"' ";
     var sqry2 = "select * from user_details where user_id= '"+ sess.user +"' ";
  
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
                                res.render('personalinfo', { title: 'Personal_information',personalinfo: result[0],userdtl: result2[0],branch: result3[0] });
                                console.log(branch[0]);
                            }
                        });
                    }
                });
              
            }
        });
        
    }
    else{
        res.redirect('signin');
    }
});

router.post('/', function(req, res, next){
    //fetch personal information
    var name = req.body.name;
    var bio = req.body.bio;
    var dob = req.body.dob;
    var branch =req.body.branch;
    var class_year = req.body.class_year;
  
    //update query
    var info_update = "update personal_info set name='"+ name +"' , class_yr='"+class_year+"', bio='"+bio+"', dob='"+dob+"', branch_code='"+branch+"' where user_id ='"+sess.user+"'";
    conn.query(info_update,function(err, result){
        if(err) throw err;
        else{
            res.render('personalinfo', {message: 'update sucessful !' });
        }  
    });
});
module.exports = router;