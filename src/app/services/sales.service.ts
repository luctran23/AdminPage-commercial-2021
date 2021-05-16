import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService extends BaseApiService{

  constructor(http: HttpClient) {
    super(http)
  }
  changeUrl() {
    return 'sales';
  }
  getProdByDateRange(startDate: any, endDate: any): Observable<any> {
    return this.http.get<any>(this.rootUrl + `/${startDate}&${endDate}`)
  }
}