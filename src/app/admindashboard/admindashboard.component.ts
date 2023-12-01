import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { ProduitService } from '../services/product.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private prodService: ProduitService) {}

  ngOnInit(): void {
    this.products$ = this.prodService.getProduits();
  }
}
