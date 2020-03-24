// We include the specified modules.
const pg = require('pg');
const express = require('express')

var config = require('./config');

// This is the PostgreSQL connection string. It is used to build a connection to the database.
var connectionString = `postgres://${config.db.postgresUser}:${config.db.postgresPass}@192.168.x.x:5433/${config.db.postgresDb}`;

// A client is created. We connect to the database with connect().
const client = new pg.Client(connectionString);
client.connect();
console.log("Connected to the database")


// This app starts a server and listens on port 3000 for connections. 
var app = express();

const port = 3000

// root url
app.get('/', (req, res) => {
  res.send({ message: 'endpoint working' });
});

app.listen(port, () => console.log(`Your app listening on port ${port}!`))
