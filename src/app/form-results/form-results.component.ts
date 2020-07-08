import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-results',
  templateUrl: './form-results.component.html',
  styleUrls: ['./form-results.component.scss']
})
export class FormResultsComponent implements OnInit {

  studentList = [{
    id: 1, name: "ajith", email: "ajith@gmail.com", phNo: 123,
    address: [{ home: "9335 Lee hwy", apt: 611, city: "fairfax", state: "Va", zipcode: 22031 },
    { address: "9335 Lee hwy", apt: 611, city: "fairfax", state: "Va", zipcode: 22031 }]
  },

  {
    id: 2, name: "bhargav", email: "bhargav@gmail.com", phNo: 133,
    address: [{ home: "9335 Lee hwy", apt: 611, city: "fairfax", state: "Va", zipcode: 22031 },
    { address: "9335 Lee hwy", apt: 611, city: "fairfax", state: "Va", zipcode: 22031 }]
  },


  {
    id: 3, name: "bobby", email: "bobby@gmail.com", phNo: 143,
    address: [{ home: "9335 Lee hwy", apt: 611, city: "fairfax", state: "Va", zipcode: 22031 },
    { address: "9335 Lee hwy", apt: 611, city: "fairfax", state: "Va", zipcode: 22031 }]
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
