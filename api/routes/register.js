const express = require("express");
const router = express.Router();
const config = require('../../config/config');
const mongoose = require('mongoose');
config.initializeDB;
const db = mongoose.connection;
db.on('error',()=>console.log('error in connection'));
db.once('open',()=>console.log('connected sucessfully sir'));

router.post("/actionregister", async(req, res, next)=> {
    
    var name = req.body.name;
    var lastname = req.body.lastname;
    var profile = req.body.profile;
    var email  = req.body.email;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpassword;
      
    var data = {
            "name" : name,
            "lastname" : lastname,
            "profile" : profile,
            "email" : email,
            "password" : password,
          "confirmpassword" : confirmpassword
            }

    db.collection('reg').insertOne(data,(err,collection)=>{
        if(err){
                throw err;
            }
            console.log('Record inserted sucessfully in db');

        });   
    
    res.render("login");
});
// end of reg page with database //

router.get("/", async(req,res, post) =>{
    res.render("register");
});

module.exports = router;