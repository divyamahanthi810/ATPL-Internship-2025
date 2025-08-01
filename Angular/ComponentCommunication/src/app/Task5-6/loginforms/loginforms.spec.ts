import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginforms } from './loginforms';

describe('Loginforms', () => {
  let component: Loginforms;
  let fixture: ComponentFixture<Loginforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
