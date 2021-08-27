import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SpringServiceService } from 'src/services/spring-service.service';


@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Total Net Worth' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  public totalNet: number = 0;
  constructor(private springService:SpringServiceService) { }

  ngOnInit() {
    this.getNetWorth()
    this.getData()
  }

  getNetWorth() {
    this.springService.getNetWorth().subscribe((data: any) => {
      console.log(data)
      this.totalNet = data[0];
      this.totalNet = Math.round(this.totalNet * 100) / 100;
    }, (err:any) => {
      console.log("entry not found")
    })
  }

  getData() {
    this.springService.getNetWorthDates().subscribe((data: any) => {
      console.log("getting networth data")
      console.log(data)
      for (var i = 0; i < data.length; ++i) {
        this.lineChartData[0].data?.push(data[i].value)
        this.lineChartLabels.push(data[i].date)
      }
    }, (err:any) => {
      console.log("entry not found")
    })
  }

 /*// events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}*/

}
