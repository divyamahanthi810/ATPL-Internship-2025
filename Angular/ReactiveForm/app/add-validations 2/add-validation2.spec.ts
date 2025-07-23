import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValidation2 } from './add-validation2';

describe('AddValidation2', () => {
  let component: AddValidation2;
  let fixture: ComponentFixture<AddValidation2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddValidation2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddValidation2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
