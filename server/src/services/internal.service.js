'use strict';

const { ProductSchema } = require('../models');

const { getCollectionsDataFromExcelFile } = require('./excel.service');

const loadExcelData = async (path) => {
  const collectionsData = getCollectionsDataFromExcelFile(path);
  await ProductSchema.collection.insertMany(
    collectionsData.productCollectionData
  );
  console.log(` [+] MongoDB updated with Excel data registers.`);
};

module.exports = { loadExcelData };
