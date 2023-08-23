'use strict';

const express = require('express');

// Constants
const PORT = 4500;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  res.send(`Hello there. Today is ${formattedDate}.`);
});

app.get('/api/health-check', (req, res) => {
  res.status(200).send('Instances are healthy');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
