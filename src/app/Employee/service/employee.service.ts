import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  qwerty : any

  constructor(private http: HttpClient, private sharedService : SharedService) { }    // getting get from HttpClient
                                                                                      // and assigining SharedService to sharedService
  getAllEmployee(){
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((response)=>{  // Subscribing to response from the link
      // console.log(response);
      this.sharedService.employeeResponse(response);    // 
    });
   

  }
}
