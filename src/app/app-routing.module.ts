import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    { path: 'student', component: StudentComponent }, 
    {path : 'parent', component: ParentComponent},
    {path : 'home', component : HomeComponent},
    { path: 'staff', loadChildren: () => import('src/app/staff/staff.module').then(m => m.StaffModule) }


    //  { path: 'staff', loadChildren: () => import('src/app/staff/staff.module').then(m => m.StaffModule) }
];


@NgModule({
    imports : [RouterModule.forRoot(routes)], 
    exports : [RouterModule]
})

export class AppRoutingModule{

}