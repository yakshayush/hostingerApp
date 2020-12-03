const mongoDb = require("mongodb");
const mongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://mongodb:mongodb@cluster0.bvlwn.mongodb.net/mongodb?retryWrites=true&w=majority";

mongoClient.connect(url, function(err, db) {
    console.log(err);
    console.log("logged");
    db.close();
});