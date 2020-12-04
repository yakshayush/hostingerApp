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

app.use(config.cors);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

const loginRoute = require('./api/routes/login');
const registerRoute = require('./api/routes/register');

app.get("/", (req, res)=> {
    res.render("app");
});
app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.listen(PORT,() => console.log('server started'));

module.exports = app;
