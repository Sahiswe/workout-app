import { CategoryService } from './category.service';
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
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';
import { FormsModule} from '@angular/forms';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    CreateWorkoutComponent,
    CategoryComponent,
    TrackerWorkoutComponent,
    StartWorkoutComponent,
    EndWorkoutComponent,
    EditWorkoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [WorkoutService,
  CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
