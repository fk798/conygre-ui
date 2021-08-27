export class Gainers {
  //declare model data for this component
  //gainerData = {symbol:'',regularMarketPrice:1.0}

  constructor(public symbol: string,
    public shortName: string,
    public regularMarketPrice: number,
    public regularMarketChangePercent: number) { }


}