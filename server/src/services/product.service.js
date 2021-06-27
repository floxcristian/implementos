'use strict';

const { ProductSchema } = require('./../models');

const getAll = async (queryParams) => {
  const uen = queryParams.uen || null;
  const category = +queryParams.category || null;
  const line = +queryParams.line || null;
  const pageSize = +queryParams.page_size || 10;
  const page = +queryParams.page || 1;
  const search = queryParams.search;
  console.log('search: ', search);

  const skip = (page - 1) * pageSize;
  const matchCondition = getMatchCondition({ uen, category, line, search });

  console.log('matchCondition: ', matchCondition);

  console.log(queryParams);
  console.log(matchCondition);
  const data = await ProductSchema.aggregate([
    { $match: matchCondition },
    { $sort: { price: 1 } },
    {
      $facet: {
        data: [{ $skip: skip }, { $limit: pageSize }],
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
  return { ...data[0], page: page, pageSize };
};

const getById = async (id) => {
  return { status: 'ALOHA..' };
};

const getByCode = async (code) => {
  const data = await ProductSchema.find({ code: code });
  return data[0];
};

const getMatchCondition = (matchFields) => {
  const { uen, category, line, search } = matchFields;

  const searchCondition = search
    ? {
        $or: [
          { code: { $regex: `.*${search}.*`, $options: 'i' } },
          { name: { $regex: `.*${search}.*`, $options: 'i' } },
          { partNumber: { $regex: `.*${search}.*`, $options: 'i' } }
        ]
      }
    : {};
  // prettier-ignore
  const specificFieldCondition =  uen ? { 'uen': uen }
    : category ? { 'category.id': category }
    : line ? { 'line.id': line }
    : {};

  return { $and: [searchCondition, specificFieldCondition] };
};

module.exports = {
  getAll,
  getById,
  getByCode
};
