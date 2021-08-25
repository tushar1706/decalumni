var express = require('express');
var router = express.Router();
var conn = require('../db');
var openurl = require('openurl');
var Insta = require('instamojo-nodejs');
const bodyparser = require('body-parser');
const API_KEY="test_2eb4d0b1f34af3a784b36c9a78a";
const  AUTH_KEY="test_d706449accab3f75bc8f2b525f6";
Insta.setKeys(API_KEY, AUTH_KEY);
Insta.isSandboxMode(true);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('initiative',{title:'Bhawisya Pariwar'});
});

module.exports = router;