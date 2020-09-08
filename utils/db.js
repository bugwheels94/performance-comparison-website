let db = false;

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://mongo:27017';

// Database Name
const dbName = 'survey';

// Create a new MongoClient
const client = new MongoClient(url, 	{
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Use connect method to connect to the Server


module.exports = async () => {
	if (db) {
		return db;
	}
	try {
		await client.connect();
		db = client.db(dbName);
		await db.collection('teams').createIndex({ name: 1 }, { unique: true });
		await db.collection('teams').createIndex({ 'name.projects': 1 });
		await db.collection('users').createIndex({ email: 1 }, { unique: true });
		// await db.collection('projects').createIndex({'recordings.whitelist': 1})
		// await db.collection('projects').createIndex({'recordings.blacklist': 1})
		return client.db(dbName);
	} catch (e) {
		// retry logic
	}
};
