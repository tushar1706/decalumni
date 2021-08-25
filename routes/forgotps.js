var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var uniqid = require('uniqid');
var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'<your email>',
        pass:'<password>'
    }
});
router.get('/',function(req,res,next) {
    res.render('forgotps',{title:'forgotps'});
});

router.post('/',function(req,res,next) {
    var mail= req.body.mail;
    var code = Math.floor(Math.random() * (999999 - 111111 + 1) ) + 111111;

    var update_qry = "update user_details set code='"+ code +"' where email= '"+ mail +"' ";
    conn.query(update_qry,function(err, result){
        if(err){
            res.render('forgotps',{title:'forgotps',fpmessage:'your email is not registered'});
        }
        else{
            var mailOptions={
                from:'<your email>',
                to:mail,
                subject:'DEC Alumni Password recovery',
                text:'DEC Alumni password recover code is :'.concat(code)
            }
            transport.sendMail(mailOptions,function(err,result) {
                if (err){
                    
                }else{
                    console.log("mail sent");
                }
            });
            res.redirect('changeps');
        }
    });
});
module.exports = router;