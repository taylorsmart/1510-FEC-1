// Request Parsing
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Data
const gitToken = require('./env/config.js')

// Middleware Execution
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static(__dirname + '/../client'));

// Configure Cors policy
app.use(cors());

// Server Port
const PORT = 3000;
app.set('port', PORT);

// Router
var router = require('./routes.js');

// Set up our routes
app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

// // If we are being run directly, run the server.
// if (!module.parent) {
//   app.listen(app.get('port'));
//   console.log('Listening on', app.get('port'));
// }


// module.exports.app = app;