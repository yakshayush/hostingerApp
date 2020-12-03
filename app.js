const express = require("express");
const ejs = require("ejs");
const PORT = 3000;
const app = express();
require("./model/mongoose");
const UserController = require("./controllers/user.controller");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.render("app");
});


app.get("/register", (req, res)=> {
    res.render("register");
});


app.get("/login", (req, res)=> {
    res.render("login");
});

app.get("/about", (req, res)=> {
    res.render("about");
});

app.get("/home", (req, res)=> {
    res.render("home");
});

app.post("/register", (req,res) =>{
    res.render("login");
});

app.post("/login", [
   UserController.insert
]);

app.listen(PORT,() => console.log('server started'));

