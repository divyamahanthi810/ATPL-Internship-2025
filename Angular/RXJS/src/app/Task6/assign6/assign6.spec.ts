import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign6 } from './assign6';

describe('Assign6', () => {
  let component: Assign6;
  let fixture: ComponentFixture<Assign6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assign6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
