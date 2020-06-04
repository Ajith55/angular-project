import { Component } from '@angular/core';
import { AppService } from './app.service';
import { SharedService } from './Employee/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myName : string = "ajith";
  someArray = [1,2,37,4, 50, 100];
  someName = ["ajith", "bhargav", "bobby"];
  myStudent = {id:44, name:"ajith", email:"ajith@gmail.com"};
  model:any;
  
  studentList = [{ id: 77, name: "ajith", email: "ajith@gmail.com" },
  { id: 55, name: "sam", email: "sam@gmail.com" },
  { id: 66, name: "dam", email: "dam@gmail.com" }]

  myStudentResponse : any;
  employeeResults : any;

  

  showName : boolean = false;

  constructor(private studentService : AppService, private sharedService : SharedService){               //dependency injection
    // console.log('constructor executed');
    // this.someArray[3];
    
  }
  ngOnInit(){
    this.sharedService.cast.subscribe((response)=>{
          this.employeeResults = response;
          console.log(this.employeeResults);
    })
  }
  

  afterChange(){
    this.studentService.getAllStudents().subscribe((response)=>{
      console.log(response);
      // console.log(response.status);
      // console.log(response.data);
            this.myStudentResponse = response;
    }, (err) =>{
      console.log(err);
    });
  }

  // numberButton(){
  //   console.log('sasdasfsa');
  //   for(let i=1; i<=100; i++){
  //     if(!(i%2)){
  //       console.log(i);
  //     }
      
  //   }
    
  // }

  // numberButton(){
  //   for(let i=0; i<this.someArray.length; i++){
  //     console.log(this.someArray[i]);
  //   }
  // }

  numberButton(){
    for(let i=0; i<this.studentList.length; i++){
          console.log(this.studentList[i]);
    }
    
    
  }
  
  

}

