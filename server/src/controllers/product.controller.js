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

const getById = async (req, res, next) => {
  const { id } = req.query;
  const data = await _productService.getById(id);
  res.json(data);
};

module.exports = {
  getAll,
  getById
};
