import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactform } from './reactform';

describe('Reactform', () => {
  let component: Reactform;
  let fixture: ComponentFixture<Reactform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
