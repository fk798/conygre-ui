import { Component, OnInit } from '@angular/core';
import { TickerService } from '../../../services/ticker.service';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.css']
})
export class GainersComponent implements OnInit {
  //declare model data for this component
  paramObj = {ticker:''}
  gainerData = {symbol:'',shortName:'', regularMarketPrice: 0.0, regularMarketChangePercent:0.0}
  stocks = [
    {symbol:'',shortName:'', regularMarketPrice: 0.0, regularMarketChangePercent:0.0},
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
    this.tickerService.getGainersData(this.paramObj)
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