var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var uniqid = require('uniqid');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Signup', signin:'Sign In' });
});
router.post('/', function(req, res, next){
    //fetch email from database
    var sql="select email from user_details where email='"+ req.body.email +"'";
    conn.query(sql, async(err, result)=>{
        let hashpsw = await bcrypt.hash(req.body.psw,8);
        if(err) throw err;
        else{
            if(result.length>0){ //check email if already exit or not
                res.render('signup', { message: 'email id already exits !' });
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
                    res.render('signup', { message: 'password and confirm password should be same !' });
                }
            }
        }
    });
    
});
module.exports = router;
