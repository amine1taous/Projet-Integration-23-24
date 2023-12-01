import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public ProductListe = new BehaviorSubject<Product[]>([]);
  public search = new BehaviorSubject<string>('');
  Quantitetotal = 0;
  panierList: any;

  cartItemList: Product[] = [];
  constructor() {}
  getProducts() {
    return this.ProductListe.asObservable();
  }
  setProduct(Product: any) {
    this.panierList.push(...Product);
    this.ProductListe.next(Product);
  }

  getTotalPrix(): number {
    let prixtotal = 0;
    console.log(this.cartItemList);
    this.cartItemList.forEach((element) => {
      prixtotal += element.prix;
    });

    return prixtotal;
  }

  addtoCart(Product: any) {
    this.cartItemList.push(Product);
    this.ProductListe.next(this.cartItemList);
    this.getTotalPrix();
  }
  removeCartItem(Product: Product) {
    this.cartItemList.map((a: Product, index: any) => {
      if (Product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.ProductListe.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.ProductListe.next(this.cartItemList);
  }
}
