import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from '../create-workout/workout';
import { formatDate } from '@angular/common';
import { WorkoutService } from '../workout.service';


@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.component.html',
  styleUrls: ['./start-workout.component.css']
})
export class StartWorkoutComponent implements OnInit {
  workout: any;
  today = new Date();


  constructor(private router: Router, private workoutService: WorkoutService) {
    this.workout = new Workout();
    console.log(this.router.getCurrentNavigation().extras.state.data);
    this.workout = this.router.getCurrentNavigation().extras.state.data;
    this.workout.startDate = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    this.workout.startTime = formatDate(this.today, 'hh:mm:ss', 'en-US', '+0530');
    // this.workout.startTime = '2019-05-17T05:30:00';
  }


  ngOnInit() {
  }

  startWorkout(workout: any) {
    console.log(workout);
    workout.details = [];
    workout.categories = this.workout.categories;
    workout.detail = {
      startDate: this.workout.startDate,

      startTime: this.workout.startDate + 'T' + this.workout.startTime,

    };
    workout.details.push(workout.detail);
    this.workoutService.updateWorkout(JSON.stringify(workout)).subscribe((result) => {
      const successMessage = 'Workout updated successfully';
      console.log(successMessage);
      this.router.navigateByUrl('/workouts');
    });
  }

}
