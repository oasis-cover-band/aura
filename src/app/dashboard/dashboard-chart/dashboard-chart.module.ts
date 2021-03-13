import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardChartComponent } from './dashboard-chart.component';
import { ChartModule } from 'angular-highcharts';



@NgModule({
  declarations: [DashboardChartComponent],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [
    DashboardChartComponent
  ]
})
export class DashboardChartModule { }
