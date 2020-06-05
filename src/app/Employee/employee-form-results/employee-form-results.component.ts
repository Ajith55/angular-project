import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form-results',
  templateUrl: './employee-form-results.component.html',
  styleUrls: ['./employee-form-results.component.scss']
})
export class EmployeeFormResultsComponent implements OnInit {


  constructor() {
   let treat:number = this.additionOfTwo(1,2);
   this.zeroFunction();
  //  console.log(treat);
   }
   

  ngOnInit(): void {
  }

  additionOfTwo(s1 : number,s2:number):number{
      let pos = s1+s2;
      return pos;
      
  }

  zeroFunction = ()=> void{          //arrow functions

  }

}
