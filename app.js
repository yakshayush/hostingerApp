const express = require("express");
const ejs = require("ejs");
const PORT = 3000;
const app = express();

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

app.post("/register", (req,res) =>{
    res.render("login");
})

app.post("/login", (req,res) =>{
    
})

app.listen(PORT,() => console.log('server started'));

