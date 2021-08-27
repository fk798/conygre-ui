import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpringServiceService {

  private springURL: string;
  private accURL : string;
  private netWorthURL : string;
  constructor(private http: HttpClient) { 
    this.springURL = "http://localhost:8080"
    this.accURL = "/accounts/"
    this.netWorthURL = "/networthdates/"
  }
  
  public getAccounts() {
    return this.http.get(this.springURL + this.accURL + "all")
  }

  public getValues() {
    return this.http.get(this.springURL + this.accURL  + "values")
  }

  public getNetWorth() {
    return this.http.get(this.springURL + this.accURL  + "networth")
  }

  public getCash() {
    return this.http.get(this.springURL + this.accURL  + "cash")
  }

  public getInvestment() {
    return this.http.get(this.springURL + this.accURL  + "investment")
  }

  public getNetWorthDates() {
    return this.http.get(this.springURL + this.netWorthURL + "networthdates")
  }
}
