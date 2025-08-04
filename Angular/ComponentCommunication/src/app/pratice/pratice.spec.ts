import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pratice } from './pratice';

describe('Pratice', () => {
  let component: Pratice;
  let fixture: ComponentFixture<Pratice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pratice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pratice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
