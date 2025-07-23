import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customvalidator } from './customvalidator';

describe('Customvalidator', () => {
  let component: Customvalidator;
  let fixture: ComponentFixture<Customvalidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customvalidator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customvalidator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
