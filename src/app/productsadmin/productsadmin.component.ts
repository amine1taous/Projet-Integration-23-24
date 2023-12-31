import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { ProduitService } from '../services/product.service';

@Component({
  selector: 'app-productsadmin',
  templateUrl: './productsadmin.component.html',
  styleUrls: ['./productsadmin.component.css'],
})
export class ProductsadminComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private prodService: ProduitService) {}

  ngOnInit(): void {
    this.products$ = this.prodService.getProduits();
  }

  deleteProduct(id: String) {
    this.prodService.supProduct(id).subscribe((data) => console.log(data));
  }
}
