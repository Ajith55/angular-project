import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import {FormsModule} from '@angular/forms';
import { TeachingStaffComponent } from './teaching-staff/teaching-staff.component';
import { NonTeachingStaffComponent } from './non-teaching-staff/non-teaching-staff.component'



@NgModule({
  declarations: [StaffComponent, TeachingStaffComponent, NonTeachingStaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule
  ]
})
export class StaffModule { }
