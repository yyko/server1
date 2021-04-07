const express = require('express');
const fs = require('fs');
const {directory_filenames} = require('./get.js')
const app = express();
const port = 4000;
const SOURCE_PATH = 'X:\\n\\images\\!svg\\screencasts\\screencast 2021-04-01.searchtides.link statuses.check';
const  SVG_PATH= 'X:\\n\\images\\!svg'
app.get('/', (request, response) => {
  const q = request.query;
  if (typeof q.id !== 'undefined') {
    let final_path = SOURCE_PATH + '\\' + q.id + '.svg';
    text = fs.readFileSync(final_path)
    response.send('' + text);
  } else {
    let xs = directory_filenames(SOURCE_PATH)
    let ys = xs.map(x=> fs.readFileSync(SOURCE_PATH + '\\' + x));
    let text = ys.join("<br>")
    response.send('' + text);
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
