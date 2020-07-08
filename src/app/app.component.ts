import { Component } from '@angular/core';
import { AppService } from './app.service';
import { SharedService } from './Employee/service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // GLOBAL VARIABLES Starts
  myName : string = "ajith";  // myName is a variable of type string
  someArray = [1,2,37,4, 50, 100]; //someArray is array of numbers
  someName = ["ajith", "bhargav", "bobby"]; //someName is array of strings
  myStudent = {id:44, name:"ajith", email:"ajith@gmail.com"}; //myStudent has a object
  model:any;
  
  studentList = [{ id: 77, name: "ajith", email: "ajith@gmail.com" }, // studentList has array of objects
  { id: 55, name: "sam", email: "sam@gmail.com" },
  { id: 66, name: "dam", email: "dam@gmail.com" }]

  myStudentResponse : any; //of type any
  employeeResults : any;
  userName : string = 'Ajith';

  

  showName : boolean = false;

  constructor(private studentService : AppService, private sharedService : SharedService, private route: Router){               //dependency injection
    // console.log('constructor executed');                                                       //will get access from AppService and SharedService
    // this.someArray[3];
    
  }
  ngOnInit(){
    this.sharedService.cast.subscribe((response)=>{          // Subscribing to sharedService to get response
          this.employeeResults = response;                  //  Assigining response to global vairable
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

  staffRoute() {
    this.route.navigate(['/staff']);
  }
  


  

}

