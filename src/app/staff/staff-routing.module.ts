import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { TeachingStaffComponent } from './teaching-staff/teaching-staff.component';
import { NonTeachingStaffComponent } from './non-teaching-staff/non-teaching-staff.component';


const routes: Routes = [
  {path: '', component: StaffComponent,
  children:[
    {path:'teaching', component: TeachingStaffComponent},
    {path:'nonteaching', component: NonTeachingStaffComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
