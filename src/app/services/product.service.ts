import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../classes/product';
const URL = 'http://localhost:3000/product';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  listProduits!: Product;

  constructor(private http: HttpClient) {}


  getProduits(): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL}/getAll`).pipe(
      map((products) =>
        products.map((prod) => ({
          ...prod,
          image: `http://localhost:3000/getimage/${prod.image}`,
        }))
      )
    );
  }

  getProductbyid(id: string): Observable<Product> {
    return this.http.get<Product>(`${URL}/getbyid/${id}`);
  }

  addProduct(formData: FormData, image: File): Observable<Product> {
    formData.append('image', image);

    // You may need to adjust this based on your actual product structure
    const productData: any = {};
    formData.forEach((value, key) => {
      productData[key] = value;
    });

    return this.http.post<Product>(`${URL}/create`, productData);
  }

  supProduct(id: String) {
    return this.http.delete(`${URL}/delete/${id}`);
  }

  modifProduct(Product: Product, id: string): Observable<Product> {
    return this.http.put<Product>(`${URL}/${id}`, Product);
  }
}
