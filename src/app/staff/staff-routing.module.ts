import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { TeachingStaffComponent } from './teaching-staff/teaching-staff.component';
import { NonTeachingStaffComponent } from './non-teaching-staff/non-teaching-staff.component';
import { StaffUpdateComponent } from './staff-update/staff-update.component';
import { StaffResultsComponent } from './staff-results/staff-results.component';


const routes: Routes = [
  {path: '', component: StaffComponent,
  children:[
    {path:'', redirectTo : 'staffResults', pathMatch : 'full'},
    {path: 'staffResults', component : StaffResultsComponent},
    {path:'teaching', component: TeachingStaffComponent},
    {path:'nonteaching', component: NonTeachingStaffComponent},
    {path : 'staffUpdate/:id', component : StaffUpdateComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
