import { CategoryService } from './../category.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
   this.categoryService.getCategories().subscribe((result)=>this.categories =result);
}
}
