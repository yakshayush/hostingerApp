const mongoose = require('mongoose');
const config = require('config');
const express = require("express");
const nodemon = require("nodemon");
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
    extended: true
}));
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");

require("./model/user");
const dbConfig = config.get('mongoDb.host');
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("error", () => {
    console.log("> error occurred from the database");
}).once("open", () => {
    console.log("> connected database");
});
console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.use(helmet);
app.use(rateLimiter);

const loginRoute = require('./api/routes/login');
const registerRoute = require('./api/routes/register');

app.get("/", (req, res) => {
    res.render("app");
});
app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.listen(PORT, () => console.log('server started'));

module.exports = app;