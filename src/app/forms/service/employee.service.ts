import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceCall {

  constructor(private http : HttpClient) { }

  studentBackendCall(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  employeeBackendCall(){
    // this.http.post('');
  }


}
