'use strict';

const xlsx = require('xlsx');

const getCollectionsDataFromExcelFile = (path) => {
  const workbook = xlsx.readFile(path);
  const dataWorksheetName = workbook.SheetNames[0];
  const excelData = xlsx.utils.sheet_to_json(
    workbook.Sheets[dataWorksheetName]
  );
  const productCollectionData = getProductCollection(excelData);
  // const lines = getOthersCollections(productCollectionData);
  return { productCollectionData };
};

/*const getProductCollection = (data) => {
  return data.map((item) => ({
    code: item.CODIGO,
    name: item.NOMBRE,
    description: item.DESCRIPCION,
    price: item['PRECIO VENTA'],
    minPrice: item['PRECIO MINIMO'],
    unitId: item.UNITID,
    cost: item.COSTO_FINANCIERO,
    partNumber: item.NUMERO_PARTE,
    codIdProvider: item.CodIDProveedor,
    status: item.ESTADO,
    brand: item.MARCA,
    manufacturerType: item.TIPOFABRICANTE,
    uen: {
      description: item.UEN,
      category: {
        id: item.IDCATEGORIA,
        description: item.CATEGORIA,
        line: {
          id: item.IDLINEA,
          description: item.LINEA
        }
      }
    },
    images: {
      image150: item['IMAGEN 150'],
      image450: item['IMAGEN 450']
    }
  }));
};*/

const getProductCollection = (data) => {
  return data.map((item) => ({
    code: item.CODIGO,
    name: item.NOMBRE,
    description: item.DESCRIPCION,
    price: item['PRECIO VENTA'],
    minPrice: item['PRECIO MINIMO'],
    unitId: item.UNITID,
    cost: item.COSTO_FINANCIERO,
    partNumber: item.NUMERO_PARTE,
    codIdProvider: item.CodIDProveedor,
    status: item.ESTADO,
    brand: item.MARCA,
    manufacturerType: item.TIPOFABRICANTE,
    uen: item.UEN,
    category: {
      id: item.IDCATEGORIA,
      description: item.CATEGORIA
    },
    line: {
      id: item.IDLINEA,
      description: item.LINEA
    },
    images: {
      image150: item['IMAGEN 150'],
      image450: item['IMAGEN 450']
    }
  }));
};

module.exports = { getCollectionsDataFromExcelFile };
