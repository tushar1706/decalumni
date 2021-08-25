var express = require('express');
var router = express.Router();
var conn = require('../db');
var bcrypt = require('bcryptjs');
var sess;
var multer = require('multer');
var file = require('fs');
var storage = multer.diskStorage({
  destination : function(req, file, cb){
      cb(null, './public/images/profilepic/')
  },
  filename: function(req, file, cb){
      cb(null, file.originalname)
  }
})

var upload = multer({storage: storage})
/* GET users listing. */

router.post('/', upload.single('propic'), function(req, res, next){
    sess=req.session;
    if(sess.user){
        var propic_qry="select profile_pic_path from personal_info where user_id ='"+sess.user+"' ";
        conn.query(propic_qry, function(err,path){
            if(err) throw err;
            else{
                if(path[0].profile_pic_path=="profilepic/defaultpic.jpg"){
                    var path ="profilepic/"+req.file.filename;
                        var pic_update = "update personal_info set Profile_pic_path='"+ path +"' where user_id ='"+sess.user+"'";
                        conn.query(pic_update,function(err, result){
                            if(err) throw err;
                            else{
                                res.render('personalinfo', {message: 'Profile pic update sucessful !' });
                            }  
                        });
                }else{
                    var del_path="./public/images/"+path[0].profile_pic_path;
                    file.unlink(del_path, function(err){
                            if(err) throw err;
                            else{
                                var path ="profilepic/"+req.file.filename;
                                var pic_update = "update personal_info set Profile_pic_path='"+ path +"' where user_id ='"+sess.user+"'";
                                conn.query(pic_update,function(err, result){
                                    if(err) throw err;
                                    else{
                                        res.render('personalinfo', {message: 'Profile pic update sucessful !' });
                                    }  
                                });
                            }

                    });
                    
                }
               
            }
        });
       
    }
    else{
        res.redirect('http://localhost:3000/signin');
    }
   
});
module.exports = router;