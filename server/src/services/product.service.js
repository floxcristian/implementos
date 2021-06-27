'use strict';

const { ProductSchema } = require('./../models');

const getAll = async () => {
  const category = null;
  const pageSize = 10;
  const pageNumber = 0;
  // const data = await ProductSchema.find().sort({ code: 1 }).skip(0).limit(10);
  const data = await ProductSchema.aggregate([
    {
      $facet: {
        data: [
          { $match: { $or: [{ null: category }, { category: category }] } },
          { $skip: pageSize * pageNumber },
          { $limit: pageSize }
        ],
        total: [{ $count: 'count' }]
      }
    },
    {
      $project: {
        data: 1,
        total: { $arrayElemAt: ['$total.count', 0] }
      }
    }
  ]);
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
  console.log('response: ', data);
  return { ...data[0], page: pageNumber + 1, pageSize };
};

const getById = async () => {
  return { status: 'ALOHA..' };
};

module.exports = {
  getAll,
  getById
};
