import { Component, OnInit } from '@angular/core';
import { StudentModel } from './models/Student.model';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentDetails : string = "Student component loaded";
  result : number;
  arrayOfNumbers : Array<number> = [1,2,3];
  studentObject : StudentModel = {id:1, name:"ajith", email:"ajit@gmail.com"}


  constructor() { 
    this.addTwoNumbers(2,4);             // calling a function
    this.nameAndAge("ajith",23, this.arrayOfNumbers);
    this.objectExample(this.studentObject);
  }

  ngOnInit() {

  }
  addTwoNumbers(s1:number,s2:number) : void{           // function declaration
      // console.log(s1+s2 );
      this.result = s1+s2
  }

  nameAndAge(name:string, age:number, num:Array<number>) : void{
        console.log(name);
        console.log(age);
        console.log(num[0]);
  }

  objectExample(data:any):void{
      console.log(data.id);
  }

}
