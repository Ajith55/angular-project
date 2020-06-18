import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  getAllStudents(){
   return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  updateEmployee(){
    let employee = {employeeName : 'Ajith', employeeId : 10, employeePhNo : '9010736143' }
    return employee;
  }

}
