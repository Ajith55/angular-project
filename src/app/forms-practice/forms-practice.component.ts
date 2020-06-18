import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-practice',
  templateUrl: './forms-practice.component.html',
  styleUrls: ['./forms-practice.component.scss']
})
export class FormsPracticeComponent implements OnInit {
  studentForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.submitform();
  }

  ngOnInit(): void {
  }

  submitStudent(){
    // console.log('form submitted');
    if(this.studentForm.valid){
      console.log('form is valid');
    }else{
      console.log('form is not valid');
    }
  }
  
  
  submitform(){
    // console.log('works');
    this.studentForm = this.formBuilder.group({
        firstName : [null],
        lastName : [null],
        Age : [null]
    });
    
  }

}
