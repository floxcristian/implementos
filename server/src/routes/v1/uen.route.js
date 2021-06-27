'use strict';

const express = require('express');
const { uenCtrl } = require('../../controllers');

const api = express.Router();

api.get('/', uenCtrl.getAll);

module.exports = api;
