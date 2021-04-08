const express = require('express');
const fs = require('fs');
const { directory_filenames, full_filenames } = require('./get.js')
const app = express();
const port = 4000;
const SOURCE_PATH = 'X:\\n\\images\\!svg\\screencasts\\screencast.2021-04-01.searchtides.links.statuses.check';
const SVG_PATH = 'X:\\n\\images\\!svg'
const start = express.Router({ mergeParams: true })


app.get('/show/*', (request, response) => {
  let full_path = request.params[0];
  let text = fs.readFileSync(full_path)
  response.send(text)
})

app.get('/api', (request, response) => {
  const q = request.query;
  if (typeof q.id !== 'undefined') {
    let final_path = SOURCE_PATH + '\\' + q.id + '.svg';
    text = fs.readFileSync(final_path)
    response.send('' + text);
  } else {
    let xs = directory_filenames(SOURCE_PATH)
    let ys = xs.map(x => SOURCE_PATH + '\\' + x);
    response.set('content-type', 'application/json');
    response.json({ frames: ys });
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
