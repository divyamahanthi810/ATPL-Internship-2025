import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrayform5 } from './arrayform5';

describe('Arrayform5', () => {
  let component: Arrayform5;
  let fixture: ComponentFixture<Arrayform5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arrayform5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arrayform5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
