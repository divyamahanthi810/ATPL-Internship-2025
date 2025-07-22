import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formsc } from './formsc';

describe('Formsc', () => {
  let component: Formsc;
  let fixture: ComponentFixture<Formsc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formsc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formsc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
