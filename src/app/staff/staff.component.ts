import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  

  staffId : number = 22;

  constructor(private router : Router, 
              
              ) { 
    this.add(1,2);
    
  }

  ngOnInit(): void {
      

  }
  add(a: number, b:number) {
    console.log(a+b);
  }

  navigateToTeaching(){
    this.router.navigate(['staff/teaching']);
  }

  navigateToNonTeaching(){
    this.router.navigate(['staff/nonteaching']);
  }




  
}
