import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign4 } from './assign4';

describe('Assign4', () => {
  let component: Assign4;
  let fixture: ComponentFixture<Assign4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assign4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
