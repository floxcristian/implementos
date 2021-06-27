'use strict';

const _productService = require('./../services/product.service');

const getAll = async (req, res, next) => {
  try {
    const data = await _productService.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll
};
