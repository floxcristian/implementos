'use strict';

const express = require('express');
const { productCtrl } = require('../../controllers');

const api = express.Router();

api.get('/', productCtrl.getAll);
api.get('/:code', productCtrl.getByCode);

module.exports = api;
