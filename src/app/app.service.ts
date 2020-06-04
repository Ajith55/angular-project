import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  getAllStudents(){
   return this.http.get<ResponseModel>('http://dummy.restapiexample.com/api/v1/employees');
  }
}
