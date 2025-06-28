import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],  // ✅ must be here
  imports: [CommonModule],             // ✅ only modules here
  exports: [DashboardComponent]        // ✅ optional
})
export class AdminModule {}
