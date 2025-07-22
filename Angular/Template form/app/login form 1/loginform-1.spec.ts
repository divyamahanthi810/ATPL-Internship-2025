import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginform1 } from './loginform-1';

describe('Loginform1', () => {
  let component: Loginform1;
  let fixture: ComponentFixture<Loginform1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginform1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginform1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
