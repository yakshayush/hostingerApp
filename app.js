const express = require("express");
const ejs = require("ejs");
const PORT = 3000;
//new dependencies for db//
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
// dependecies ends here//

const app = express();
//db connections //
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://Localhost:27017/kite',{
useNewUrlParser : true,
useUnifiedTopology : true

});

const db = mongoose.connection;
db.on('error',()=>console.log('error in connection'));
db.once('open',()=>console.log('connected sucessfully sir'));

//db code ends here//

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.render("app");
});


app.post("/register", (req, res)=> {
    
    var name = req.body.name;
    var lastname = req.body.lastname;
    var profile = req.body.profile;
    var email  = req.body.email;
    var password = req.body.password;
      
    var data = {
            "name" : name,
            "lastname" : lastname,
            "profile" : profile,
            "email" : email,
            "password" : password
    } 
            db.collection('user').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log('Record inserted sucessfully in db');

        })
    
    
    //res.render("register");//
});

    


app.get("/login", (req, res)=> {
    res.render("login");
});


app.get("/register", (req,res) =>{
    res.render("register");
})

app.post("/login", (req,res) =>{
        res.render("jak");
   })



app.listen(PORT,() => console.log('server started'));

