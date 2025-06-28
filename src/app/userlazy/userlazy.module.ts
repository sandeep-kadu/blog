import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlazyRoutingModule } from './userlazy-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserlazyRoutingModule
  ]
})
export class UserlazyModule { }
