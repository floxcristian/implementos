import { IProduct } from './product.model';

export interface IProductDTO {
  data: IProduct[];
  total: number;
  pageSize: number;
  page: number;
}
