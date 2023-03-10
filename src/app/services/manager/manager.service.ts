import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './../url';
@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  finalBaseUrl: string;
  JWTHeader: string = '';
  constructor(private httpClient: HttpClient) {
    this.finalBaseUrl = baseUrl + 'users';
    if (localStorage.getItem('token')) {
      this.JWTHeader = localStorage.getItem('token')!;
    }
  }
  login(credentials: any) {
    return this.httpClient.post(this.finalBaseUrl + '/login', {
      logAs: credentials.logAs,
      username: credentials.username,
      password: credentials.password,
    });
  }
  getRepairsUnpaid() {
    return this.httpClient.get(baseUrl + 'repairs/unpaid', {
      headers: { auth: this.JWTHeader },
    });
  }
}
