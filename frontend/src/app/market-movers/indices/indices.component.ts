import { Component, OnInit } from '@angular/core';
import { TickerService } from 'src/services/ticker.service';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit {
  //declare model data for this component
  paramObj = {ticker:''}
  gainerData = {symbol:'',shortName:'', regularMarketPrice: 0.0, regularMarketChangePercent:0.0}
  stocks = [
    {symbol:'',shortName:'', regularMarketPrice: 0.0, regularMarketChangePercent:0.0},
    {symbol:'',shortName:'', regularMarketPrice: 0.0, regularMarketChangePercent:0.0},
    {symbol:'',shortName:'', regularMarketPrice: 0.0, regularMarketChangePercent:0.0},
    {symbol:'',shortName:'', regularMarketPrice: 0.0, regularMarketChangePercent:0.0}
  ]

constructor(private tickerService:TickerService) { }

  ngOnInit(): void {
    this.makeTickerServiceCall()
  }

  makeTickerServiceCall()
  {
    this.tickerService.getIndicesData(this.paramObj)
      .subscribe( (data:any) =>
      {
        console.log(data)
        this.stocks = data.quoteResponse.result
        //this.stockArray = this.stockQuotes.quoteResponse.result
      },
      (err:any) =>
      {
        //404 
        console.log("entry not found")
        //this.gainerData = {region:'US',symbol:'null',shortName:'null',regularMarketPrice:0.0,regularMarketChangePercent:0.0}
      }
      )
  } 
}
