import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from '../create-workout/workout';
import { formatDate } from '@angular/common';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-end-workout',
  templateUrl: './end-workout.component.html',
  styleUrls: ['./end-workout.component.css']
})
export class EndWorkoutComponent implements OnInit {
  workout: any;
  today = new Date();

  constructor(private router: Router, private workoutService: WorkoutService) {
    this.workout = new Workout();
    console.log(this.router.getCurrentNavigation().extras.state.data);
    this.workout = this.router.getCurrentNavigation().extras.state.data;
    this.workout.endDate = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    this.workout.endTime = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss', 'en-US', '+0530');
   }

ngOnInit() {
  }
endWorkout(workout: any) {
    console.log(workout);
    workout.details = [];
    workout.categories = this.workout.categories;
    workout.detail = {
      endDate: this.workout.endDate,
      endTime: this.workout.endTime
    };
    workout.details.push(workout.detail);
    this.workoutService.updateWorkout(JSON.stringify(workout)).subscribe((result) => {
      const successMessage = 'Workout updated successfully';
      console.log(successMessage);
      this.router.navigateByUrl('/workouts');
    });
  }

}
