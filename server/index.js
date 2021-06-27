'use strict';

const express = require('express');
const cors = require('cors');
const _routes = require('./src/routes/v1');
// Services
const _mongoLib = require('./src/lib/mongodb');
const { loadExcelData } = require('./src/services/internal.service');

// Constants
const { PORT } = require('./src/config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1', _routes);

app.listen(PORT, async () => {
  console.log(` [+] Server is running on ${PORT}.`);
  await _mongoLib.init();
  // await loadExcelData('PRODUCTOS.xlsx');
});
