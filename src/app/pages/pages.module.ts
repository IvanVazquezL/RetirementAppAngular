import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { UsersComponent } from './maintenance/users/users.component';
import { NursesComponent } from './maintenance/nurses/nurses.component';
import { DoctorsComponent } from './maintenance/doctors/doctors.component';
import { ResidentsComponent } from './maintenance/residents/residents.component';
import { RelativesComponent } from './maintenance/relatives/relatives.component';
import { UserComponent } from './maintenance/users/user.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    UsersComponent,
    NursesComponent,
    DoctorsComponent,
    ResidentsComponent,
    RelativesComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule,
    RouterModule
  ],
  exports:  [
    DashboardComponent,
    PagesComponent,
    UsersComponent
  ]
})
export class PagesModule { }
