import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  property: any;

  constructor(private http: HttpClient) { }

  getWorkouts() {
    this.http.get('http://localhost:6868/api/v1/workouts')
      .subscribe(arg => this.property = arg);
  }
  createworkouts(){
    this.http.get('http://localhost:6868/api/v1/workouts')
      .subscribe(arg => this.property = arg);
  }
  category(){
    this.http.get('http://localhost:6868/api/v1/workouts')
      .subscribe(arg => this.property = arg);
  }
 trackworkouts() {
    this.http.get('http://localhost:6868/api/v1/workouts')
      .subscribe(arg => this.property = arg);
  }
}
