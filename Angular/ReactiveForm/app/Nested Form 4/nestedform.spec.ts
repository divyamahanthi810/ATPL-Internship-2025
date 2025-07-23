import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nestedform } from './nestedform';

describe('Nestedform', () => {
  let component: Nestedform;
  let fixture: ComponentFixture<Nestedform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nestedform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nestedform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
