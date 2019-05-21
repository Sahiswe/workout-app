import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  categories: any;
  [x: string]:any;

  categoryName: String;

  constructor(private workoutService: WorkoutService, private categoryService: CategoryService) { }

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

  getCategories() {
    this.categoryService.getCategories().subscribe((result) => this.categories = result);
  }

  addWorkout(workout: any) {
    this.workoutService.addWorkout(workout);
  }

}
