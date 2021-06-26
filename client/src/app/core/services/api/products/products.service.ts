import { Injectable } from '@angular/core';
import { IProduct } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = [
    {
      id: '1',
      code: 'MG7VID0019',
      name: 'VIDRIO ULTIMO LI. PDSO 1050 G7',
      description: 'ANCHO 1799 ALTO 1065',
      price: 302890,
      minPrice: 198036,
      unitId: 'UN',
      cost: 36048.4,
      images: [
        'https://firebasestorage.googleapis.com/v0/b/imagenimplementos.appspot.com/o/150%2FMG7VID0019.jpg?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/imagenimplementos.appspot.com/o/450%2FMG7VID0019.jpg?alt=media'
      ],
      brand: 'VIDROFORTE'
    }
  ];

  constructor() {}

  getAll(): IProduct[] {
    return this.products;
  }

  getById(id: string): IProduct | null {
    return this.products.find((product) => product.id === id) || null;
  }
}
