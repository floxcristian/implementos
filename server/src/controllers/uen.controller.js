'use strict';

const _uenService = require('./../services/uen.service');

const getAll = async (req, res, next) => {
  try {
    const data = await _uenService.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll
};
