import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../classes/product';
const URL = 'http://localhost:3000/product';
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  listProduits!: Product;
  constructor(private http: HttpClient) {}
  deleteProduct(id: number) {
    throw new Error('Method not implemented.');
  }

  getProduits(): Observable<Product[]> {
    return this.http.get<Product[]>(URL + '/getAll');
  }
  getProductbyid(id: number): Observable<Product> {
    return this.http.get<Product>(URL + '/' + id);
  }
  addProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(URL + '/addProduct', p);
  }
  supProduct(id: number) {
    return this.http.delete(URL + '/' + id);
  }
  modifProduct(Product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(URL + '/' + id, Product);
  }
}
