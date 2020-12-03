const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/abcd";

MongoClient.connect(url, function(err, db) {
    console.log("jai");
  if (err) throw err;
  console.log("Database created!");
  db.close();
});