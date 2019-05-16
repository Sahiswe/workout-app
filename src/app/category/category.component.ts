import { WorkoutService } from './../workout.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: WorkoutService) { }

  ngOnInit() {
   this.category();
  }
category(){
  this.category();
}
}