import { WorkoutService } from './workout.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkoutsComponent } from './workouts/workouts.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { CategoryComponent } from './category/category.component';
import { TrackerWorkoutComponent } from './tracker-workout/tracker-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    CreateWorkoutComponent,
    CategoryComponent,
    TrackerWorkoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
