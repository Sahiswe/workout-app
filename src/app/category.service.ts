import { Category } from './category/category';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  property: Object;

  constructor(private http: HttpClient) { }


  getCategories(): Observable<any> {
    return this.http.get('http://localhost:8081/api/v1/workout/all');
  }
  postCategory(category: Category) {
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post('http://localhost:8081/api/v1/workout/category/add', category, options);
  }
  updateCategory(category: Category) {
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.put('http://localhost:8081/api/v1/workout/category/update', category, options);
  }
  deleteCategory(id: any) {
    return this.http.delete('http://localhost:8081/api/v1/workout/category/delete/' + id);
  }

}
