import { CategoryService } from './../category.service';

import { Component, OnInit } from '@angular/core';
import { Category } from './category';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories;
  categoryName: string;
  msg: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
   this.categoryService.getCategories().subscribe((result) => this.categories = result);
}
addCategory() {

  console.log('inside' + this.categoryName);

  const category = new Category();

  category.categoryName = this.categoryName;

  this.categoryService.postCategory(category).subscribe((data) => this.msg = data);

  this.categoryService.getCategories().subscribe((result) => this.categories = result);

   }
   deleteCategory(id: any) {
     console.log(id);
     this.categoryService.deleteCategory(id).subscribe((result)=> this.msg = result);
// tslint:disable-next-line: align
    this.categoryService.getCategories().subscribe((result) => this.categories = result);

    }
   }



