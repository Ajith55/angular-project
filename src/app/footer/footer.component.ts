import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  id : string;
  name : string;
  employee : any;
  // studentIdandName: any;

  constructor(private appService : AppService) { }

  ngOnInit(): void {
  }


  checkService(){
      // console.log(this.name);
      // this.appService.getEmployeeById(this.id).subscribe((response)=>{
      //   this.employee = response;
      // });
      
      
  }

  getStudentDetails(){
    // this.appService.getStudentData(this.id, this.name)

  }

}
