const mongo = require ( "mongodb" ).MongoClient;
const url = "mongodb://localhost:27017/" ;
mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
	
	if (err) {
		console .log(err);
		process.exit( 0 );
	}
	
	let data = { id: 100 , name: "Shahid" };

	var dbo = db.db( "mydb" );
	console .log( "database connected!" );
	
	dbo.collection( "user" ).findOne({}, (err, result) => {
		if (err) {
			console .log(err);
			process.exit( 0 );
		}

		console .log( "Here is the record" );
		console .log(result);
		db.close();
	});
});

