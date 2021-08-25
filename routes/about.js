var express = require('express');
var router = express.Router();
var conn = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
            res.render('about', {title: 'About Us',sign:'Signin'});
});
module.exports = router;