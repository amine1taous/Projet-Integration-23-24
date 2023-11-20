import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../classes/article';

const URL = 'http://localhost:3000/article';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  listArticles!: Article;
  constructor(private http: HttpClient) {}
  deleteProduct(id: number) {
    throw new Error('Method not implemented.');
  }

  getProduits(): Observable<Article[]> {
    return this.http.get<Article[]>(URL + '/getAll');
  }
  getArticlebyid(id: number): Observable<Article> {
    return this.http.get<Article>(URL + '/' + id);
  }
  addArticle(p: Article): Observable<Article> {
    return this.http.post<Article>(URL, p);
  }
  supArticle(id: number) {
    return this.http.delete(URL + '/' + id);
  }
  modifArticle(Article: Article, id: number): Observable<Article> {
    return this.http.put<Article>(URL + '/' + id, Article);
  }
}
