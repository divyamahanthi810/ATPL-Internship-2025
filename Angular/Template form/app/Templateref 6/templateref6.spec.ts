import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateref6 } from './templateref6';

describe('Templateref6', () => {
  let component: Templateref6;
  let fixture: ComponentFixture<Templateref6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templateref6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templateref6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
