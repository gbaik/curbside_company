const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

const db = './db/index.js';

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + './../client/dist'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

app.post('/search', function (req, res) {
  res.end('');
});


app.listen(port, _ => {
  console.log(`Server connected to port number: ${port}`);
});
