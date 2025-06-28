import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import  { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardComponent as UserDashboardComponent } from './user/dashboard/dashboard.component';

//const routes: Routes = [];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'user', component: UserDashboardComponent },
   {
    path: 'adminlazy',
    loadChildren: () =>
      import('./adminlazy/adminlazy.module').then(m => m.AdminlazyModule)
  },
  {
    path: 'userlazy',
    loadChildren: () =>
      import('./userlazy/userlazy.module').then(m => m.UserlazyModule)
  },
  { path: '**', component: PageNotFoundComponent }

  // { path: '', redirectTo: 'admin', pathMatch: 'full' } // default path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
