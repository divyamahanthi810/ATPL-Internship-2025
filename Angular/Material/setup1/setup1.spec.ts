import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setup1 } from './setup1';

describe('Setup1', () => {
  let component: Setup1;
  let fixture: ComponentFixture<Setup1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setup1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Setup1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
