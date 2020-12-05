const express = require("express");
const router = express.Router();

router.post("/actionLogin", (req, res, next) => {
    var email  = req.body.email;
    var password = req.body.password;
      
    var data = {
            "email" : email,
            "password" : password
            } 
            db.collection('login').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log('Record inserted sucessfully in db');

        })
     
    res.render("jak");
    next();
});

//login main page
router.get("/", (req,res,next) =>{
    res.render("login");
});

module.exports = router;