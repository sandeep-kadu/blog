import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],  // ✅ Declare here
  imports: [CommonModule],             // ✅ Only modules here
  exports: [DashboardComponent]        // ✅ Export if needed outside
})
export class UserModule {}
