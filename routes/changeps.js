var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var uniqid = require('uniqid');

router.get('/',function(req,res,next) {
    res.render('changeps',{title:'forgotps'});
});
router.post('/',async(req,res,next)=> {
    var code= req.body.code;
    var password = req.body.password;
    var cpassword = req.body.cpassword;
    let hashpsw = await bcrypt.hash(password,8);
    var update_qry = "update user_details set password='"+ hashpsw +"' where code= '"+ code +"' ";
    if (password==cpassword) {
        conn.query(update_qry,function(err, result){
            if(err) throw err;
            else{
                res.render('changeps',{title:'forgotps',fpmessage:'successfull !'});
            }
        });
    }else{
        res.render('changeps',{title:'forgotps',fpmessage:'password and confirm password should be same !'});
    }
});
module.exports = router;