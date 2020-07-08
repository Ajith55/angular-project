import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TeachingStaffComponent } from './teaching-staff/teaching-staff.component';
import { NonTeachingStaffComponent } from './non-teaching-staff/non-teaching-staff.component';
import { StaffUpdateComponent } from './staff-update/staff-update.component';
import { StaffResultsComponent } from './staff-results/staff-results.component';
// import { SharedService } from './service/shared.service';






@NgModule({
  declarations: [StaffComponent, TeachingStaffComponent, NonTeachingStaffComponent, StaffUpdateComponent, StaffResultsComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // SharedService
  
  ]
})
export class StaffModule { }
