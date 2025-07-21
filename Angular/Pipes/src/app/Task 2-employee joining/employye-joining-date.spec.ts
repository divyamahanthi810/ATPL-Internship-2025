import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployyeJoiningDate } from './employye-joining-date';

describe('EmployyeJoiningDate', () => {
  let component: EmployyeJoiningDate;
  let fixture: ComponentFixture<EmployyeJoiningDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployyeJoiningDate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployyeJoiningDate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
