import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffResultsComponent } from './staff-results.component';

describe('StaffResultsComponent', () => {
  let component: StaffResultsComponent;
  let fixture: ComponentFixture<StaffResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
