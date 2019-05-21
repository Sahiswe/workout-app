import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { CategoryService } from '../category.service';
import { Category } from '../category/category';
import { Workout } from './workout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  categories: any;
  [x: string]: any;
  workout: Workout;

  categoryName: String;

  constructor(private workoutService: WorkoutService, private categoryService: CategoryService, private router: Router) {
    this.workout = new Workout();
  }

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
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
      console.log(this.categories);
    });
  }

  addWorkout(workout: any) {
    console.log(workout);
    workout.categories = [];
    workout.categories.push(workout.category);
    workout._id = Math.floor(Math.random() * 99) + 100;
    this.workoutService.addWorkout(workout).subscribe((result) => {
      const successMessage = 'Workout added successfully';
      console.log(successMessage);
      this.router.navigateByUrl('/workouts');
    });
  }

}
