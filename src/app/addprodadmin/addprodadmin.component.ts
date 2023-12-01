import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprodadmin',
  templateUrl: './addprodadmin.component.html',
  styleUrls: ['./addprodadmin.component.css'],
})
export class AddprodadminComponent implements OnInit {
  constructor(
    private serviceprod: ProduitService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  fg!: FormGroup;
  // Assuming you have a local list of products in your component
  products: any[] = [];

  ngOnInit(): void {
    this.fg = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      quantite: ['', Validators.required],
      prix: ['', Validators.required],
      disponibilite: ['', Validators.required],
      image: [''],
      categorie: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = new FormData();
    this.appendFormData('nom', formData);
    this.appendFormData('prix', formData);
    this.appendFormData('description', formData);
    this.appendFormData('quantite', formData);
    this.appendFormData('disponibilite', formData);
    this.appendFormData('categorie', formData);

    const imageControl = this.fg.get('image');
    const ima = imageControl ? imageControl.value : null; // Use null if the control is null

    if (ima) {
      this.serviceprod.addProduct(formData, ima as File).subscribe(
        (addedProduct) => {
          console.log('Product added:', addedProduct);
          this.products.push(addedProduct);
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    }
  }

  private appendFormData(controlName: string, formData: FormData) {
    formData.append(controlName, this.fg.get(controlName)!.value);
  }
}
