var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
/* GET users listing. */
router.get('/', function(req, res, next) {
   // res.render('jobinfo', { title: 'Job Information' });
    sess=req.session;
    var sqry = "select * from 	current_job where user_id= '"+ sess.user +"' ";
    var sqry2 = "select * from previous_job where user_id= '"+ sess.user +"' ";

    if(sess.user){
        conn.query(sqry, function(err, result){
            if(err) throw err;
            else{
                conn.query(sqry2, function(err, result2){
                    if(err) throw err;
                    else{
                        res.render('jobinfo', { title: 'Job_information',current_jobinfo: result[0],pre_jobinfo: result2[0] });
                        console.log(result[0]);
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
    //current job info
    var c_company_name = req.body.c_company_name;
    var c_title = req.body.c_title;
    var c_joining_year = req.body.c_joining_year;
    var c_city = req.body.c_city;
    var c_country = req.body.c_country;
    //previous job info
    var p_company_name = req.body.p_company_name;
    var p_title = req.body.p_title;
    var p_joining_year = req.body.p_joining_year;
    var p_city = req.body.p_city;
    var p_country = req.body.p_country;
    //update query
    var current_job_update = "update current_job set company_name='"+ c_company_name +"' ,title='"+c_title+"', joining_year='"+c_joining_year+"', city='"+c_city+"', country='"+c_country+"' where user_id ='"+sess.user+"'";
    var previous_job_update = "update previous_job set company_name='"+ p_company_name +"', title='"+p_title+"', joining_year='"+p_joining_year+"', city='"+p_city+"', country='"+p_country+"'where user_id ='"+sess.user+"'";
    conn.query(current_job_update,function(err, result){
        if(err) throw err;
        else{
            conn.query(previous_job_update,function(err, result){
                 if(err) throw err;
                 else{
                    res.render('jobinfo', {message: 'update sucessful !' });
                 }
            });
        }  
    });
});
module.exports = router;