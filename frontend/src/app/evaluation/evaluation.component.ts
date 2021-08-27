import { Component, OnInit } from '@angular/core';
import { SpringServiceService } from 'src/services/spring-service.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  public netWorth: number;
  constructor(private springService:SpringServiceService) { 
    this.netWorth = 0;
  }

  ngOnInit(): void {
    this.getAllNetWorth();
  }

  getAllNetWorth() {
    this.springService.getNetWorth().subscribe((data: any) => {
      console.log(data)
      this.netWorth = Math.round(data[0] * 100) / 100;
    }, (err:any) => {
      console.log("entry not found")
    })
  }
}
