var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var sess;
/* GET users listing. */
router.post('/', function(req, res, next) {

     //fetching data
     var sqry = "select personal_info.user_id, personal_info.Profile_pic_path, personal_info.name, personal_info.class_yr, branch.branch_name from personal_info inner join branch on personal_info.branch_code=branch.branch_code and personal_info.branch_code='"+ req.body.branch +"'";
        conn.query(sqry, function(err, result){
            if(err) throw err;
            else{
                res.render('alumnisearch', { title: 'alumni search',info: result});
              
            }
        });
});

module.exports = router;