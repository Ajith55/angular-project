import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {


  constructor(private employeeService : EmployeeService ){            // Getting access to EmployeeService and storing in employeeService

  }
  

  ngOnInit(): void {
  }

  

  onBurttonClick(){
    // console.log("button working");
    this.employeeService.getAllEmployee();        // calling the function getAllEmployee from EmployeeService

  }


}
