import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-tracker-workout',
  templateUrl: './tracker-workout.component.html',
  styleUrls: ['./tracker-workout.component.css']
})
export class TrackerWorkoutComponent implements OnInit {

  constructor(private service: WorkoutService) { }

  ngOnInit() {
    
  }
}
