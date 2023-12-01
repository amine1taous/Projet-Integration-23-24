import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-addarticleadmin',
  templateUrl: './addarticleadmin.component.html',
  styleUrls: ['./addarticleadmin.component.css'],
})
export class AddarticleadminComponent implements OnInit {
  constructor(
    private serviceart: ArticleService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  fg!: FormGroup;

  articles: any[] = [];
  ngOnInit(): void {
    this.fg = this.fb.group({
      nom: ['', Validators.required],
      detail: ['', Validators.required],
      origin: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
    });
  }

  onSubmit() {
    this.serviceart.addArticle(this.fg.value).subscribe((addedArticle) => {
      console.log('Article added:', addedArticle);

      // Update the local list of products
      //this.articles.push(addedArticle);

      // Optional: Sort or filter the products as needed

      // Navigate to the '/products' route (optional)
      this.router.navigate(['/articles']);
    });
  }
}
