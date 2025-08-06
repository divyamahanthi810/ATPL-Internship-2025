import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign3 } from './assign3';

describe('Assign3', () => {
  let component: Assign3;
  let fixture: ComponentFixture<Assign3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assign3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
