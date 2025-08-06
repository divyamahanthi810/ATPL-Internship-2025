import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign2 } from './assign2';

describe('Assign2', () => {
  let component: Assign2;
  let fixture: ComponentFixture<Assign2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assign2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
