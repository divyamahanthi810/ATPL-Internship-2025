import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drpdwn } from './drpdwn';

describe('Drpdwn', () => {
  let component: Drpdwn;
  let fixture: ComponentFixture<Drpdwn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drpdwn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drpdwn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
