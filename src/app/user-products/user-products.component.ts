import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { ProduitService } from '../services/product.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css'],
})
export class UserProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private prodService: ProduitService) {}

  ngOnInit(): void {
    this.products$ = this.prodService.getProduits();
  }
}
