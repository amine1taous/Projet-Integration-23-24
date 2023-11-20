import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../classes/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articlesadmin',
  templateUrl: './articlesadmin.component.html',
  styleUrls: ['./articlesadmin.component.css'],
})
export class ArticlesadminComponent implements OnInit {
  articles$!: Observable<Article[]>;

  constructor(private artService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.artService.getProduits();
  }

  deleteProduct(id: number) {
    console.log('product deleted with success');
  }
}
