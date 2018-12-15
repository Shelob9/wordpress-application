
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').load();

const app = express();
const port = process.env.PORT || 5000;

function prepareApp(app){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
}

prepareApp(app);


//Bring in routers
const roy = require('./roy');
const pages = require( './wp-pages');
app.use(roy());
app.use(pages());
// API calls
app.get('/api/hello', (req, res) => {
	res.send({ hi:  'Roy' });
});

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));

	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
