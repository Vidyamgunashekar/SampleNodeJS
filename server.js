'use strict';

const express = require('express');

// Constants
const PORT = 4500;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Vidya on Aug 21st');
});

app.get('/api/health-check',(req,res) => {
res.status(200).send('some text');

});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
