import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeFormResultsComponent } from './Employee/employee-form-results/employee-form-results.component';
import { EmployeeFormComponent } from './Employee/employee-form-results/employee-form/employee-form.component';
import { EmployeeResultsComponent } from './Employee/employee-form-results/employee-results/employee-results.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeFormResultsComponent,
    EmployeeFormComponent,
    EmployeeResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
