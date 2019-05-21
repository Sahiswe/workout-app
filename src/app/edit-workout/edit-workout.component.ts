import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { CategoryService } from '../category.service';
import { Category } from '../category/category';
import { Workout } from '../create-workout/workout';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.css']
})
export class EditWorkoutComponent implements OnInit {
  categories: any;
  [x: string]: any;
  workout: any;

  categoryName: string;


  constructor(private workoutService: WorkoutService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.workout = new Workout();
    console.log(this.router.getCurrentNavigation().extras.state.data);
    this.workout = this.router.getCurrentNavigation().extras.state.data;
    // this.activatedRoute.data.subscribe((data) => {
    //   this.workout = data;
    // });
  }

  ngOnInit() {
    this.getCategories();
  }
  updateWorkout(workout: any) {
    console.log(workout);
    workout.categories = [];
    workout.categories.push(workout.category);
    this.workoutService.updateWorkout(workout).subscribe((result) => {
      const successMessage = 'Workout updated successfully';
      console.log(successMessage);
      this.router.navigateByUrl('/workouts');
    });
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
      console.log(this.categories);
    });
  }

}
