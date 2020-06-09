import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffServiceService } from './service/staff-service.service';
import { StaffModel } from './model/staffModel';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffId : number = 22;
  staffResponse : Array<StaffModel> = [];

  constructor(private router : Router, private staffServiceService : StaffServiceService) { }

  ngOnInit(): void {
  }

  navigateToTeaching(){
    this.router.navigate(['staff/teaching']);
  }

  navigateToNonTeaching(){
    this.router.navigate(['staff/nonteaching']);
  }

  onStaffDetails(){
   this.staffServiceService.getAllStaffDetails().subscribe((response)=>{
     this.staffResponse = response.data;

    // console.log(response.data);
    for(let i = 0; i<this.staffResponse.length; i++){
      // console.log(this.staffResponse[i].profile_image);
      if(this.staffResponse[i].profile_image == '') {
        this.staffResponse[i].profile_image = 'N/A';
      } 
      // if(this.staffResponse[i].employee_age>45)
      // console.log(this.staffResponse[i].employee_age);
      if(parseInt(this.staffResponse[i].employee_age)<= 45){
        this.staffResponse[i].ageStatus = 'minor';
      } else{
          this.staffResponse[i].ageStatus = 'Major';
      }
    }
   });

  }

}
