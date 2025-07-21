import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlist1 } from './productlist1';

describe('Productlist1', () => {
  let component: Productlist1;
  let fixture: ComponentFixture<Productlist1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlist1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productlist1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
