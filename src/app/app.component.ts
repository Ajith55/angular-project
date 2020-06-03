import { Component } from '@angular/core';

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
  
  studentList = [{ id: 44, name: "ajith", email: "ajith@gmail.com" },
  { id: 55, name: "sam", email: "sam@gmail.com" },
  { id: 66, name: "dam", email: "dam@gmail.com" }]

  showName : boolean = false;

  constructor(){
    console.log('constructor executed');
    // this.someArray[3];
  }

  afterChange(){
    //console.log('button Working');
    this.myName = "ajith Aribandi";
    console.log(this.myStudent.id);
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
          console.log(this.studentList[i].id);
    }
  }
  

}

