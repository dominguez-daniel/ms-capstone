require('dotenv').config();
const express = require('express');

const algo = require('../utils/mergeSort');
const pkgVersion = require('../package.json').version;

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200);
  res.send('Healthy');
});

app.post('/sort', (req, res) => {
  console.log('LOG:: /sort ::', `${algo.method}`);
  if (req.body.input && Array.isArray(req.body.input)) {
    console.time("timer");
    const result = algo.mergeSort(req.body.input);
    console.timeEnd("timer");
    res.status(200).json({ 
      sortedOutput: result,
      methodUsed: algo.method,
      recursive: true,
      version: pkgVersion
    });
  } else {
    res.status(401).json({ error: 'Error sorting input' });
  }
});

module.exports = app;