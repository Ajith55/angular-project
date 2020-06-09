import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeFormResultsComponent } from './Employee/employee-form-results/employee-form-results.component';
import { EmployeeFormComponent } from './Employee/employee-form-results/employee-form/employee-form.component';
import { EmployeeResultsComponent } from './Employee/employee-form-results/employee-results/employee-results.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeFormResultsComponent,
    EmployeeFormComponent,
    EmployeeResultsComponent,
    ParentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
