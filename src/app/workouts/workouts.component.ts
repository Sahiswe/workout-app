import { WorkoutService } from './../workout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  constructor(private service: WorkoutService) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts() {
    this.service.getWorkouts();
  }

}
