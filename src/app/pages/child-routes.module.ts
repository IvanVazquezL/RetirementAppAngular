import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./maintenance/users/users.component";
import { NursesComponent } from "./maintenance/nurses/nurses.component";
import { DoctorsComponent } from "./maintenance/doctors/doctors.component";
import { RelativesComponent } from "./maintenance/relatives/relatives.component";
import { ResidentsComponent } from "./maintenance/residents/residents.component";
import { UserComponent } from "./maintenance/users/user.component";

const childRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'nurses', component: NursesComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'relatives', component: RelativesComponent },
    { path: 'residents', component: ResidentsComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildRoutesModule { }