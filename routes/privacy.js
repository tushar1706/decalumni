var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var sess;
/* GET users listing. */
router.get('/', function(req, res, next) {
    sess=req.session;
     //fetching data
     var sqry2 = "select * from user_details where user_id= '"+ sess.user +"' ";
  
    if(sess.user){
                conn.query(sqry2, function(err, result2){
                    if(err) throw err;
                    else{
                       res.render('privacy', { title: 'privacy setting',userdtl: result2[0] });
                        
                        }
                });
            
        
    }
    else{
        res.redirect('signin');
    }
});

router.post('/', function(req, res, next){
    //fetch email from database
    var sql="select email from user_details where email='"+ req.body.email +"'";
    conn.query(sql, async(err, result)=>{
        let hashpsw = await bcrypt.hash(req.body.password,8);
        if(err) throw err;
        else{
            if(result.length>0){ //check email if already exit or not
                res.render('privacy', { message: 'email id already exits !' });
            }
            else{
                //match password and confirm password
                if(req.body.password==req.body.c_password)
                {
                    var userdtl_update = "update user_details set email='"+ req.body.user_name +"' , password='"+hashpsw+"'  where user_id ='"+sess.user+"'";
                    conn.query(userdtl_update,function(err, result){
                        if(err) throw err;
                        else{
                            res.render('privacy', {message: 'update sucessful !' });
                        }  
                    });

                }
                else{
                    res.render('privacy', { message: 'password and confirm password should be same !' });
                }
            }
        }
    });
    
});
module.exports = router;