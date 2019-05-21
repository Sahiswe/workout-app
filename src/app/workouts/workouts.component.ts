import { WorkoutService } from './../workout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workouts: any;

  constructor(private workoutService: WorkoutService, private router: Router) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts() {
    this.workoutService.getWorkouts().subscribe((result) => this.workouts = result);
  }

  startWorkout(workout: any) {
    // this.router.navigateByUrl('/startWorkout');
    this.router.navigate(['/startWorkout'], { state: { data: workout } });
  }
  endWorkout(workout: any) {
    this.router.navigate(['/endWorkout'], { state: { data: workout } });
    // this.router.navigateByUrl('/endWorkout');
  }
  editWorkout(workout: any) {
    // this.router.navigateByUrl('/editWorkout');
    this.router.navigate(['/editWorkout'], { state: { data: workout } });
  }
  deleteWorkout(id: number) {
    this.workoutService.deleteWorkout(id).subscribe((result) => {
      const successMessage = 'Workout deleted successfully';
      console.log(successMessage);
      this.getWorkouts();
    });
  }

}
