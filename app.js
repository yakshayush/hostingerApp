const mongoose = require('mongoose');
const express = require("express");
const nodemon = require("nodemon");
const config = require('config');
const ejs = require("ejs");
//new dependencies for db//
const bodyparser = require("body-parser");
// dependecies ends here//
const PORT = config.get("port");
console.log(PORT);
const app = express();
//db connections //
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

require("./model/user");
const dbConfig = config.get('mongoDb.host');
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true });

mongoose.connection.on("error", () => {
    console.log("> error occurred from the database");
}).once("open", () => {
    console.log("> connected database");
});
console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));
var cookieParser = require('cookie-parser');
var sessionParser = require('express-session');
app.use(cookieParser());
app.use(sessionParser({ secret: 'node', cookie: { maxAge: 60000 }}));
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
