const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController");
router.post("/signInForm", async(req, res, next) => {

    console.log('kkk');
    loginController.create_a_task(req, res);
     
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

   router.post("/signUpForm", (req,res) =>{
    res.render("jak");
});

module.exports = router;