const express = require('express');
const productRoute = require('./product.route');
const uenRoute = require('./uen.route');

const app = express();

app.use('/product', productRoute);
app.use('/uen', uenRoute);

app.get('/', async (req, res) => {
  res.send('STATUS OK');
});

module.exports = app;
