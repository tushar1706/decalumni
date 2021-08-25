var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var session = require('express-session');
/* GET users listing. */
router.get('/', function(req, res, next) {
    sess=req.session;

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
    var previous_job_update = "update previous_job set company_name='"+ c_company_name +"', title='"+c_title+"', joining_year='"+c_joining_year+"', city='"+c_city+"', country='"+c_country+"'where user = '"+sess.user+"'";
    conn.query(current_job_update,function(err, result){
        if(err) throw err;
        else{
            conn.query(previous_job_update,function(err, result){
                 if(err) throw err;
                 else{
                    res.redirect('http://localhost:3000/personalinfo');
                 }
            });
        }  
    });
});
module.exports = router;