import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicdetail } from './dynamicdetail';

describe('Dynamicdetail', () => {
  let component: Dynamicdetail;
  let fixture: ComponentFixture<Dynamicdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamicdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
