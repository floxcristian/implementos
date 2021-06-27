'use strict';

const { ProductSchema } = require('./../models');

const getAll = async () => {
  const data = await ProductSchema.find().sort({ code: 1 }).skip(0).limit(10);
  /*const data = await ProductSchema.aggregate([
    {
      $group: {
        _id: {
          uen: '$uen',
          category: '$category.description',
          line: '$line.description'
        },
        products: {
          $push: '$$ROOT'
        }
      }
    },
    {
      $group: {
        _id: '$id.uen',
        categories: {
          $addToSet: { category: '$_id.category', line: '$_id.line' }
        }
      }
    }
  ]).exec();*/
  return data;
};

module.exports = {
  getAll
};
