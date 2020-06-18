import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { EmployeeModel } from './model/employee.model';
import { EmployeeServiceCall } from './service/employee.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  studentForm : FormGroup;
  formSubmitStatus : boolean = false;
  employee: EmployeeModel;
  employeeForm: FormGroup;

  constructor( private formBuilder : FormBuilder, private appService : AppService, private employeeService : EmployeeServiceCall) {
    this.createForm();
    this.createEmployeeForm();
   }

  ngOnInit(): void {
    // this.studentForm.controls.firstName.valueChanges.subscribe((data)=>{
    //       console.log(data);
    // });
    this.studentForm.valueChanges.subscribe((data)=>{
      console.log(data);
        if((data.firstName) || (data.lastName) ){
              console.log('Values Present');
              this.studentForm.get('firstName').setValidators(Validators.compose(
                  [Validators.required, Validators.maxLength(10), Validators.minLength(3)]));
              this.studentForm.get('lastName').setValidators(Validators.compose([Validators.required]));

              this.studentForm.get('firstName').updateValueAndValidity({ emitEvent: false } );
              this.studentForm.get('lastName').updateValueAndValidity({ emitEvent: false } );


        } else{
              console.log('no Values Present');

              this.studentForm.get('firstName').setValidators(Validators.compose([]));
            this.studentForm.get('lastName').setValidators(Validators.compose([]));

            this.studentForm.get('firstName').updateValueAndValidity({ emitEvent: false } );
            this.studentForm.get('lastName').updateValueAndValidity({ emitEvent: false } );
        }
    })
  }


  submitStudent(){
    this.formSubmitStatus = true;
     console.log(this.studentForm);
    //  console.log(this.studentForm.getRawValue());
    if(this.studentForm.valid){
        console.log('form is valid');
        //make a service call
        this.employeeService.studentBackendCall().subscribe((response)=>{
                // save response
        });
        this.formSubmitStatus = false;
    } else{
        console.log('form is invalid');
    }
  }

  createForm(){
    this.studentForm = this.formBuilder.group({
      firstName : [null],
        //  Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(3)])],
      lastName : [null],
      //  Validators.compose([Validators.required])],
      age : [null, Validators.compose([Validators.required])],
      email : [null, Validators.compose([Validators.email])]
    });
  }

  createEmployeeForm(){
    this.employeeForm = this.formBuilder.group({
      employeeName : [null],
      employeeId : [null],
      employeePhNo : [null]
    })
  }

  updateEmployee(){
    this.employee = this.appService.updateEmployee();
    // console.log(this.employee);
    this.patchEmployeeFormValues(this.employee);
  }

  patchEmployeeFormValues(emp: EmployeeModel) {
    this.employeeForm.patchValue({
      employeeName : emp.employeeName,
      employeeId : emp.employeeId,
      employeePhNo : emp.employeePhNo
    })
  }

  submitEmployee(){
    // console.log(this.employeeForm);
    
  }

}
