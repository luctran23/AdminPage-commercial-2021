import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountLoginService extends BaseApiService{

  constructor(http: HttpClient) {
    super(http)
  }
  changeUrl() {
    return 'account';
  }
  register(data: any) : Observable<any> {
    return this.http.post<any>(this.rootUrl + '/register', data);
  }
  login(data: any) : Observable<any> {
    return this.http.post<any>(this.rootUrl + '/login', data);
  }
}