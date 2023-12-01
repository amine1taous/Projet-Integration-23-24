import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { ProduitService } from '../services/product.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css'],
})
export class AdminproductComponent implements OnInit {
  id!: string;
  product$!: Observable<Product>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private proService: ProduitService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.product$ = this.proService.getProductbyid(this.id);
    this.product$.subscribe((data) => {
      console.log('Product data:', data);
    });
  }
}
