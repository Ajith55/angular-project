import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { SharedService } from '../service/shared.service';
import { StaffModel } from '../model/staffModel';

@Component({
  selector: 'app-staff-update',
  templateUrl: './staff-update.component.html',
  styleUrls: ['./staff-update.component.scss']
})
export class StaffUpdateComponent implements OnInit {
  employeeForm : FormGroup;
  user : any;
  
  constructor(private route : ActivatedRoute, private formBuilder : FormBuilder, 
    // private sharedService : SharedService
    ) {
    this.formCreation();
   }

  ngOnInit(): void {
   // let myId = this.route.snapshot.params['id'];

   // console.log(myId);
    this.route.params.subscribe(
      (param: Params)=>{
        console.log(param['id']);
      }
    );
    // this.sharedService.cast.subscribe(user => this.user = user);
  }

  formCreation(){
    this.employeeForm = this.formBuilder.group({
          id : [null],
          name : [null],
          salary : [null],
          age : [null],
          ageStatus : [null]

    });
  }

  submitStaffData(){
    // console.log('submit works');
  }


}
