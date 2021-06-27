'use strict';

const xlsx = require('xlsx');

const getCollectionsDataFromExcelFile = (path) => {
  const workbook = xlsx.readFile(path);
  const dataWorksheetName = workbook.SheetNames[0];
  const excelData = xlsx.utils.sheet_to_json(
    workbook.Sheets[dataWorksheetName]
  );
  const productCollectionData = getProductCollection(excelData);
  const UenCollectionData = getOthersCollections(productCollectionData);
  console.log('UenCollectionData: ', UenCollectionData);
  return { productCollectionData, UenCollectionData };
};

const getOthersCollections = (productsCollections) => {
  const _groupedByUen = productsCollections.reduce((acc, product) => {
    if (!acc[product.uen]) {
      acc[product.uen] = {
        uen: product.description,
        categories: [{ ...product.category, line: product.line }]
      };
    } else {
      acc[product.uen].categories.push({
        ...product.category,
        line: product.line
      });
    }
    return acc;
  }, {});
  const groupedByUen = Object.values(_groupedByUen).sort((a, b) =>
    a.uen.localeCompare(b.uen)
  );
  const groupedValues = groupedByUen.map((uen) => {
    const _groupedCategories = uen.categories.reduce((_acc, category) => {
      if (!_acc[category.id]) {
        _acc[category.id] = {
          id: category.id,
          description: category.description,
          lines: [category.line]
        };
      } else {
        _acc[category.id].lines.push(category.line);
      }
      return _acc;
    }, {});
    const groupedCategories = Object.values(_groupedCategories).sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    //console.log('x: ', groupedCategories);
    const formattedCategories = groupedCategories.map((category) => {
      const _groupedLines = category.lines.reduce((__acc, line) => {
        __acc[line.id] = line;
        return __acc;
      }, {});
      const groupedLines = Object.values(_groupedLines).sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      return {
        ...category,
        lines: groupedLines
      };
    });
    console.log('formattedCategories: ', formattedCategories);
    return {
      uen: uen.uen,
      categories: formattedCategories
    };
  });
  return groupedValues;
};

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
