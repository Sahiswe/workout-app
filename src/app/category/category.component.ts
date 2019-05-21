import { CategoryService } from './../category.service';

import { Component, OnInit } from '@angular/core';
import { Category } from './category';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  [x: string]:any;

  categories;
  categoryName: String;
  msg: any;
  categoryId;
  

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  addCategory() {
   console.log('inside' + this.categoryName);
    const category = new Category();
    category.categoryName = this.categoryName;
   this.categoryService.postCategory(category).subscribe((data) => {
    this.getCategories();
    });
  }
  editcategory(category:Category){
    console.log(category);
    this.categoryName = category.categoryName;
    this.categoryId=category._id;
  }
  updateCategory(category: Category){
    var category= new Category();
    category.categoryName=this.categoryName;
    category._id=this.categoryId;
   this.categoryService.updateCategory(category).subscribe((result) =>{
      this.getCategories();
    });
  

  }
  deleteCategory(id: any) {
    console.log(id);
    this.categoryService.deleteCategory(id).subscribe((result) => {
      this.getCategories();
    });
  }
  
  


  getCategories() {
    this.categoryService.getCategories().subscribe((result) => this.categories = result);
  }
}



