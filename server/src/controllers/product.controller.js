'use strict';

const _productService = require('./../services/product.service');

const getAll = async (req, res, next) => {
  try {
    const data = await _productService.getAll(req.query);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  //const { id } = req.query;
  const id = +req.params.id;

  const data = await _productService.getById(id);
  res.json(data);
};

const getByCode = async (req, res, next) => {
  //const { id } = req.query;
  const code = req.params.code;

  const data = await _productService.getByCode(code);
  res.json(data);
};

module.exports = {
  getAll,
  getById,
  getByCode
};
