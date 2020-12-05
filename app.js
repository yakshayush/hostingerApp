const express = require("express");
const nodemon = require("nodemon");
const config = require('./config/config');
const ejs = require("ejs");
//new dependencies for db//
const bodyparser = require("body-parser");
// dependecies ends here//
const PORT = 3000;
const app = express();
//db connections //
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));
var cookieParser = require('cookie-parser');
var sessionParser = require('express-session');
app.use(cookieParser());
app.use(sessionParser({ secret: 'node', cookie: { maxAge: 60000 }}));
app.use(config.cors);
app.use(express.static("public"));
app.set("view engine", "ejs", "html");
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

const loginRoute = require('./api/routes/login');
const registerRoute = require('./api/routes/register');
//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 });

app.get("/", (req, res)=> {
    res.render("homepage");  //res.render("app")
});

//html
app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.listen(PORT,() => console.log('server started'));

module.exports = app;
