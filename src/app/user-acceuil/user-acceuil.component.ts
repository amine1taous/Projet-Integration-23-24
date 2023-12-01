import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { ProduitService } from '../services/product.service';

@Component({
  selector: 'app-user-acceuil',
  templateUrl: './user-acceuil.component.html',
  styleUrls: ['./user-acceuil.component.css'],
})
export class UserAcceuilComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private prodService: ProduitService) {}

  ngOnInit(): void {
    this.products$ = this.prodService.getProduits();
  }
}
