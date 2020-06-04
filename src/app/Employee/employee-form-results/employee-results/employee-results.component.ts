import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-employee-results',
  templateUrl: './employee-results.component.html',
  styleUrls: ['./employee-results.component.scss']
})
export class EmployeeResultsComponent implements OnInit {
  employeeResults : any;

  constructor(private sharedService : SharedService) { }

  ngOnInit(){
    this.sharedService.cast.subscribe((response)=>{
          this.employeeResults = response;
          console.log(this.employeeResults);
    })
  }

}
