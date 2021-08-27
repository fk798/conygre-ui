import { Component, OnInit } from '@angular/core';
import { SpringServiceService } from 'src/services/spring-service.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  public isCollapsed = false;
  public data: any;
  public totalInvestment = 0;
  constructor(private springService:SpringServiceService) { }

  ngOnInit(): void {
    this.getAllInvestment()
  }

  getAllAccounts() {
    this.springService.getAccounts().subscribe((data: any) => {
      console.log(data)
    }, (err:any) => {
      console.log("entry not found")
    })
  }

  getAllInvestment() {
    this.springService.getInvestment().subscribe((data: any) => {
      console.log(data)
      this.data = data;
      for (var i = 0; i < data.length; ++i) {
        this.totalInvestment += data[i].value;
      }
      this.totalInvestment = Math.round(this.totalInvestment * 100) / 100;
    }, (err:any) => {
      console.log("entry not found")
    })
  }
}
