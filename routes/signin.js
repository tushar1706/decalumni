var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var sess;
/* GET users listing. */
router.get('/', function(req, res, next) {
    req.session.destroy(function(err) {
        // cannot access session here
      });
    res.render('signin', { title: 'Signin',signin:'Sign In' });
});
router.post('/',async(req, res)=>{
    //take email from user
    var email = req.body.email;
    var psw = req.body.psw;
    console.log(email);
    var sql = "select * from user_details where email='"+ email +"'";
    conn.query(sql, async(err, result)=>{
        if(err) throw err;
        else{
            if(!(await bcrypt.compare(psw, result[0].password))){
                res.render('signin', { message: 'email or password is incorrect !' });
            }
            else{
                sess=req.session;
                sess.user=result[0].user_id;
                res.redirect('home');
            }
        }
    })
});
module.exports = router;
