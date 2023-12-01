import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  isHovered: boolean[] = Array();
  constructor(private prodService: ProduitService, private router :Router) {}

  ngOnInit(): void {
    this.products$ = this.prodService.getProduits();
  }

  onMouseEnter(index: number): void {
    this.isHovered[index] = true;
  }

  onMouseLeave(): void {
    this.isHovered.fill(false);
  }

  redirectToDetailPage(productId: string): void {
    // Rediriger vers la page de détails avec l'ID du produit
    this.router.navigate(['/detailproduct', productId]);
  }
}
