import { Component, OnInit } from '@angular/core';
import { ChartType } from "chart.js"
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { SpringServiceService } from 'src/services/spring-service.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [
    [],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: [
        'rgb(139,197,241)',
        'rgb(254,160,179)'
      ]
    }
  ];

  public totalCash = 0;
  public totalInvestment = 0;

  constructor(private springService:SpringServiceService) { }

  ngOnInit(): void {
    this.getCash();
    this.getInvestment();
    console.log("doughnut")
    console.log(this.doughnutChartData)
 }

 getCash() {
  this.springService.getCash().subscribe((data: any) => {
    //console.log(data)
      for (var i = 0; i < data.length; ++i) {
        this.totalCash += data[i].value;
      }
      console.log(this.totalCash);
      this.totalCash = Math.round(this.totalCash * 100) / 100;

      this.doughnutChartLabels.push("Cash")
      this.doughnutChartData[0].push(this.totalCash)
    }, (err:any) => {
      console.log("entry not found")
    })
}

 getInvestment() {
  this.springService.getInvestment().subscribe((data: any) => {
    //console.log(data)
      for (var i = 0; i < data.length; ++i) {
        this.totalInvestment += data[i].value;
      }
      console.log(this.totalInvestment)
      this.totalInvestment = Math.round(this.totalInvestment * 100) / 100;
      console.log(this.totalInvestment)

      this.doughnutChartLabels.push("Investment")
      this.doughnutChartData[0].push(this.totalInvestment)
    }, (err:any) => {
      console.log("entry not found")
    })
}

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}
}
