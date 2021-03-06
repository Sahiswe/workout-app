import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  property: any;

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<any> {
    return this.http.get('http://localhost:8081/api/v1/all');
  }

  addWorkout(workout: any) {
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.post('http://localhost:8081/api/v1/workout/add', workout, options);
  }
  updateWorkout(workout: any) {
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.put('http://localhost:8081/api/v1/workout/update', workout, options);
  }
  deleteWorkout(id: any) {
    // const options = { headers: { 'Content-Type': 'application/json' } };
    return this.http.delete('http://localhost:8081/api/v1/workout/delete/' + id);
  }
}
