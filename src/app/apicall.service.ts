import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  public nextPage: string = "";

  constructor(private httpClient: HttpClient) {}

  public getEmployes(url?: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`http://dummy.restapiexample.com/api/v1/employees`);
  }



}
