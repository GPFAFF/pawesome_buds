import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  // console.log(res);
  // console.log(res.sendFile(path.join(__dirname, '../dist/index.html')));
});

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
