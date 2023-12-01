import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  public produits: any = [];
  public grandTotal!: number;
  number: number = 1;
  constructor(private panService: PanierService) {}

  ngOnInit(): void {
    this.panService.getProducts().subscribe((res) => {
      this.produits = res;
      this.grandTotal = this.panService.getTotalPrix();
    });
  }
  removeItem(item: any) {
    this.panService.removeCartItem(item);
  }
  emptycart() {
    this.panService.removeAllCart();
  }
  plus() {
    this.number++;
  }
  moins() {
    if (this.number != 0) {
      this.number--;
    }
  }
}
