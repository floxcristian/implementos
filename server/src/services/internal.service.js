'use strict';

const { ProductSchema, UenSchema } = require('../models');

const { getCollectionsDataFromExcelFile } = require('./excel.service');

const loadExcelData = async (path) => {
  const { productCollectionData, UenCollectionData } =
    getCollectionsDataFromExcelFile(path);

  // await ProductSchema.collection.insertMany(productCollectionData);
  // await UenSchema.collection.insertMany(UenCollectionData);
  console.log(` [+] MongoDB updated with Excel data registers.`);
};

module.exports = { loadExcelData };
