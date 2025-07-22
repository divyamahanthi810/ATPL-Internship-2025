import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formreset5 } from './formreset5';

describe('Formreset5', () => {
  let component: Formreset5;
  let fixture: ComponentFixture<Formreset5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formreset5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formreset5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
