const mongoose = require('mongoose');
const express = require("express");
const session = require("express-session");
const config = require('config');
const cors = require('cors');
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
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'node' 
}));
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");

const yaml = require('js-yaml');
require('./utils/passport-setup');
const errorHandler = require('./utils/error-handler');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
require("./model/user");
const dbConfig = config.get('mongoDb.host');
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.connection.on("error", () => {
    console.log("> error occurred from the database");
}).once("open", () => {
    console.log("> connected database");
});
var NODE_ENV = config.util.getEnv('NODE_ENV');
console.log('NODE_ENV: ' + NODE_ENV);
var cookieParser = require('cookie-parser');
app.use(cookieParser('node'));
app.use(session({ secret: 'node', cookie: { maxAge: 24 * 6000 } }));
app.use(express.static("public"));
app.set("view engine", "ejs", "html");
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

//app.use(helmet());
//app.use(rateLimiter);
app.use(cors());
app.use(errorHandler);

const loginRoute = require('./api/routes/login');
const registerRoute = require('./api/routes/register');
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
//First middleware before response is sent
app.use(function(req, res, next) {
    console.log("Start");
    next();
});

app.get("/", (req, res) => {
    res.render("home");
});

//html
app.use('/login', loginRoute);
app.use('/register', registerRoute);

if (NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log('server started'));
}
module.exports = app;