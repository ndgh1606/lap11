const mongo = require ( "mongodb" ).MongoClient;
const url = "mongodb://localhost:27017/" ;

mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
	
	if (err) {
		console .log(err);
		process.exit( 0 );
	}

	console .log( "database connected!" );
	var dbo = db.db( "mydb" );
	dbo.createCollection( "customers" , (err, result) => {

		if (err) {
			console .log(err);
			process.exit( 0 );
		}

		console .log( "collection created!" );
		db.close();
	});
});

