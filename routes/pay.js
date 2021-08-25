var express = require('express');
var router = express.Router();
var conn = require('../db');
var open = require('open');
const fs = require('fs');
var Insta = require('instamojo-nodejs');
const bodyparser = require('body-parser');
const API_KEY="test_2eb4d0b1f34af3a784b36c9a78a";
const  AUTH_KEY="test_d706449accab3f75bc8f2b525f6";
Insta.setKeys(API_KEY, AUTH_KEY);
Insta.isSandboxMode(true);
router.post('/', function(req, res, next){
    var data = new Insta.PaymentData();
    data.purpose = "Test";            // REQUIRED
    data.amount = req.body.amount;;                  // REQUIRED
    data.setRedirectUrl("http://localhost:3000/initiative");
    data.purpose = "Bhawishya Pariwar donation";            // REQUIRED
    data.amount = req.body.amount;
    data.buyer_name = req.body.name;
    data.email = req.body.email; 
    data.phone = req.body.mob;              // REQUIRED
    data.setRedirectUrl("http://localhost:3000/initiative");
    data.send_sms                = 'False';
    data.send_email              = 'False';
    data.allow_repeated_payments = 'False';
    var page ="pay.js";
    Insta.createPayment(data, function(error, response) {
        if (error) {
            // some error
        } else {
            // Payment redirection link at response.payment_request.longurl
            const responseData = JSON.parse(response);
            const redirectUrl= responseData.payment_request.longurl;
            console.log(redirectUrl);
            open(redirectUrl);
        }
    });
    res.render('initiative',{title:'Initiative'});
});

module.exports = router;