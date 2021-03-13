import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ProjectService } from 'src/app/static-info-services/project.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {

  @Input() data;
  tempData;
chart = undefined;

  constructor(
    private projectService: ProjectService
  ) {

  }
  ngOnInit(): void {
    this.tempData = this.data;
    this.chart = new Chart({
      chart: {
        backgroundColor: '#2c2c2c',
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'],
        labels: {
          style: {
            color: '#fefefe'
          }
        }
      },
      yAxis: {
        title: {
          align: null
        },
        labels: {
          style: {
            color: '#fefefe'
          }
        },
        type: 'logarithmic'
      },
      legend: {
        itemStyle: {
          color: '#fefefe'
        },
        itemHoverStyle: {
          color: 'grey'
        }
      },
      series: [
        {
          name: 'Daily Volume (' + this.projectService.project.networkCurrency + ')',
          data: [Number(this.data[6].dailyVolumeETH), Number(this.data[5].dailyVolumeETH), Number(this.data[4].dailyVolumeETH),
          Number(this.data[3].dailyVolumeETH), Number(this.data[2].dailyVolumeETH), Number(this.data[1].dailyVolumeETH), Number(this.data[0].dailyVolumeETH)],
          type: 'column',
          color: '#72B7D6'
        },
        {
          name: 'Daily Volume (USD)',
          data: [Number(this.data[6].dailyVolumeUSD), Number(this.data[5].dailyVolumeUSD), Number(this.data[4].dailyVolumeUSD),
          Number(this.data[3].dailyVolumeUSD), Number(this.data[2].dailyVolumeUSD), Number(this.data[1].dailyVolumeUSD), Number(this.data[0].dailyVolumeUSD)],
          type: 'column',
          color: '#3cbb3c'
        },
        {
          name: 'Daily Volume (' + this.projectService.project.tokenName + ')',
          data: [Number(this.data[6].dailyVolumeToken), Number(this.data[5].dailyVolumeToken), Number(this.data[4].dailyVolumeToken),
          Number(this.data[3].dailyVolumeToken), Number(this.data[2].dailyVolumeToken), Number(this.data[1].dailyVolumeToken), Number(this.data[0].dailyVolumeToken)],
          type: 'column',
          color: '#5c2a92ff'
        },
        {
          name: this.projectService.project.tokenName + ' Price (USD)',
          data: [Number(this.data[6].priceUSD), Number(this.data[5].priceUSD), Number(this.data[4].priceUSD),
          Number(this.data[3].priceUSD), Number(this.data[2].priceUSD), Number(this.data[1].priceUSD), Number(this.data[0].priceUSD)],
          type: 'spline',
          color: '#278027'
        },
        {
          name: this.projectService.project.tokenName + ' Liquidity (USD)',
          data: [Number(this.data[6].totalLiquidityUSD), Number(this.data[5].totalLiquidityUSD), Number(this.data[4].totalLiquidityUSD),
          Number(this.data[3].totalLiquidityUSD), Number(this.data[2].totalLiquidityUSD), Number(this.data[1].totalLiquidityUSD), Number(this.data[0].totalLiquidityUSD)],
          type: 'line',
          color: '#52fc52'
        },
      ]
    });
  }
}
