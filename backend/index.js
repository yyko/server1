const express = require('express');
const fs = require('fs');
const {directory_filenames} = require('./get.js')
const app = express();
const port = 4000;
const SOURCE_PATH = 'X:\\n\\images\\!svg\\timeline';
let xs = directory_filenames(SOURCE_PATH)
console.log(xs.length)
app.get('/', (request, response) => {
  const q = request.query;
  if (typeof q.id !== 'undefined') {
  } else {
    response.send('' + xs.length);
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
