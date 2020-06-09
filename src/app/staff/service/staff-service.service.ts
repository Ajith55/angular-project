import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaffResponse } from '../model/staffResponse';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor(private http : HttpClient) { }

  getAllStaffDetails(){
       return this.http.get<StaffResponse>('http://dummy.restapiexample.com/api/v1/employees');
  }

}
