import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private Employeeinfo = new BehaviorSubject<any>(''); // Assigining behaviouralsubject of type any to Employeeinfo
  cast = this.Employeeinfo.asObservable();

  constructor() { }

  employeeResponse(data){
    // console.log('getting res');
    this.Employeeinfo.next(data);
  }
}
