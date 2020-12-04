const express = require("express");
const router = express.Router();

router.post("/actionLogin", (req, res, next) => {

    console.log('kkk');
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
     
  //  res.render("../../views/login");
    next();
});

//login main page
router.get("/", (req,res,next) =>{
    res.render("login");
});


router.post("/login", (req,res) =>{
        res.render("jak");
   });

module.exports = router;