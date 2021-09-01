import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  URL = "https://api.stackexchange.com/2.3/questions?"
  getPage(query: any): Observable<any> {
    let url = this.URL;
    let params = new HttpParams();
    let a = params.append('page', query.page);
    let b = params.append('pagesize', query.pagesize);
    let c = params.append('fromdate', query.fromdate);
    let d = params.append('todate', query.todate);
    let e = params.append('min', query.min);
    let f = params.append('max', query.max);
    let g = params.append('tagged', query.tagged);
    let h = params.append('order', query.order);
    url = url + (a.get('page') != '' ? 'page=' + a.get('page') + "&" : "").toString()
    url = url + (b.get('pagesize') != '' ? 'pagesize=' + b.get('pagesize') + "&" : "").toString()
    url = url + (c.get('fromdate') != '' ? 'fromdate=' + this.convertDatetoSec(c.get('fromdate')) + "&" : "").toString()
    url = url + (d.get('todate') != '' ? 'todate=' + this.convertDatetoSec(d.get('todate')) + "&" : "").toString()
    url = url + (h.get('order') != '' ? 'order=' + h.get('order') + "&" : "").toString()
    url = url + (e.get('min') != '' ? 'min=' + this.convertDatetoSec(e.get('min')) + "&" : "").toString() 
    url = url + (f.get('max') != '' ? 'max=' + this.convertDatetoSec(f.get('max')) + "&" : "").toString()
    url = url + "sort=activity&" + (g.get('tagged') != '' ? 'tagged=' + g.get('tagged') + "&" : "").toString() + "site=stackoverflow"
    //console.log("check" + url)
    return this.http.get(url);
  }
  convertDatetoSec(query: any) {
    let d = query.split("-")
    let date: Date = new Date();
    date.setFullYear(d[0]);
    date.setDate(d[2]);
    date.setMonth(d[1] - 1);
    console.log(date)
    console.log(Math.round(date.getTime() / 1000))
    return Math.round(date.getTime() / 1000);
  }
    // if (query.page != '' && query.pagesize != '' && query.fromdate != '') {
    //   param = param + "page=" + query.page + "&pagesize=" + query.pagesize + "&fromdate=" + this.convertDatetoSec(query) + "&order=desc&sort=votes&site=stackoverflow"
    //   return this.http.get(param);

    // } else if (query.page != '') {
    //   let k = "page=" + query.page
    //   param = param + k + "&order=desc&sort=votes&site=stackoverflow"
    //   return this.http.get(param);

    // } else if (query.pagesize != '') {
    //   param = param + "pagesize=" + query.pagesize + "&order=desc&sort=votes&site=stackoverflow"
    //   return this.http.get(param);

    // } else if (query.fromdate != '') {
    //   param = param + "fromdate=" + this.convertDatetoSec(query) + "&order=desc&sort=votes&site=stackoverflow"
    //   return this.http.get(param);
    // }
    // return this.http.get("https://api.stackexchange.com/2.3/questions?&site=stackoverflow");
}
