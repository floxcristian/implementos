interface ICategory {
  id: number;
  description: string;
}

interface ILine {
  id: number;
  description: string;
}

interface IImages {
  image150: string;
  image450: string;
}
export interface IProduct {
  _id: string;
  brand: string;
  category: ICategory;
  codIdProvider: number;
  code: string;
  cost: number;
  description: string;
  images: IImages;
  line: ILine;
  manufacturerType: string;
  minPrice: number;
  name: string;
  partNumber: number;
  price: number;
  status: string;
  uen: string;
  unitId: string;
}
