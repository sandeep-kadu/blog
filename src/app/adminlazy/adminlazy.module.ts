import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminlazyRoutingModule } from './adminlazy-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminlazyRoutingModule
  ]
})
export class AdminlazyModule { }
