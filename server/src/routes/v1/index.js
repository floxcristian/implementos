const express = require('express');
const productRoute = require('./product.route');

const app = express();

app.use('/product', productRoute);

app.get('/', async (req, res) => {
  res.send('asdsad');
});

module.exports = app;
