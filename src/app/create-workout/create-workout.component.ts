import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  constructor(private service: WorkoutService) { }

  ngOnInit() {
    //this.createworkout();
  }
  //createworkout(){
    //this.createworkout();

 // }

}
