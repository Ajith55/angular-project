import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormResultsComponent } from './employee-form-results.component';

describe('EmployeeFormResultsComponent', () => {
  let component: EmployeeFormResultsComponent;
  let fixture: ComponentFixture<EmployeeFormResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
