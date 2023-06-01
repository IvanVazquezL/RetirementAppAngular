import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';

const routes:Routes = [
  {
    path: 'dashboard', 
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    canLoad: [ AuthGuard ],
    loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
  }
] 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
