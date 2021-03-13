import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardChartModule } from './dashboard-chart/dashboard-chart.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardChartModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
