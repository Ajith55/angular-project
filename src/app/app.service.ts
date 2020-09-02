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


// //
// let student = {id: 10, name: "john", age: 20};
// let modifiedStudent = {...student, status: "minor"}; //spread operator
// console.log(student);
// console.log(modifiedStudent);
// let stuIds = [10,20,38,40];
// console.log(stuIds);
// //let n = [...stuIds, 21];
// stuIds.push(21);
// console.log(stuIds);
// // console.log(n);//