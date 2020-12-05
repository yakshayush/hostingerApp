const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const registerController = require("../controller/registerController");
const db = mongoose.connection;
db.on('error',()=>console.log('error in connection'));
db.once('open',()=>console.log('connected sucessfully sir'));

router.post("/actionregister", async(req, res, next)=> {
    registerController.register_user(req,res);
    res.render("login");
});
// end of reg page with database //

router.get("/", async(req,res, post) =>{
    res.render("register");
});

module.exports = router;