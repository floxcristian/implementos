'use strict';

const { UenSchema } = require('./../models');

const getAll = async () => {
  const data = await UenSchema.find({});
  return data;
};
module.exports = {
  getAll
};
