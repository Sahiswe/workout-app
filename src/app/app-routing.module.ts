import { TrackerWorkoutComponent } from './tracker-workout/tracker-workout.component';
import { CategoryComponent } from './category/category.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { NgModule, Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  { path: 'workouts', component: WorkoutsComponent },
   { path: 'create', component: CreateWorkoutComponent },
   { path: 'category', component: CategoryComponent},
   { path: 'track' , component : TrackerWorkoutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
 }
