import express from 'express';
import render from './render';
import { MongoClient } from 'mongodb';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

// Constants
const PORT = 3636;
const HOST = '0.0.0.0';
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'portfolio';

(async () => {
	try {
		const client = await MongoClient.connect(DB_URL);
		global.db = client.db(DB_NAME);
	} catch(err) {
		console.log(err.message);
	}
    const app = express();
    app.get('/', (req, res) => {
      res.send(render());
    });
    app.use('/assets', express.static('assets'));
    app.use(express.static('dist/client'));

	app.use('/graphql', graphqlHTTP({
		schema,
		graphiql: true,
	}));

    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
})();

