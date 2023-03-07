var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://huyndggcs210489:17071989@cluster0.lmsbzb8.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

