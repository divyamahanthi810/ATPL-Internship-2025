import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetForm3 } from './reset-form3';

describe('ResetForm3', () => {
  let component: ResetForm3;
  let fixture: ComponentFixture<ResetForm3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetForm3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetForm3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
