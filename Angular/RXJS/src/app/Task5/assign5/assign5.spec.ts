import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign5 } from './assign5';

describe('Assign5', () => {
  let component: Assign5;
  let fixture: ComponentFixture<Assign5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assign5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
