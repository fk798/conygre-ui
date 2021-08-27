import { Component, OnInit } from '@angular/core';
import { SpringServiceService } from 'src/services/spring-service.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  public isCollapsed = false;
  public data: any;
  public totalCash = 0;
  constructor(private springService:SpringServiceService) { }

  ngOnInit(): void {
    this.getAllCash()
  }

  getAllAccounts() {
    this.springService.getAccounts().subscribe((data: any) => {
      console.log(data)
    }, (err:any) => {
      console.log("entry not found")
    })
  }

  getAllCash() {
    this.springService.getCash().subscribe((data: any) => {
      console.log(data)
      this.data = data;
      for (var i = 0; i < data.length; ++i) {
        this.totalCash += data[i].value;
      }
      this.totalCash = Math.round(this.totalCash * 100) / 100;
    }, (err:any) => {
      console.log("entry not found")
    })
  }
}
