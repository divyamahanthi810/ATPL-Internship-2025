import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpectorComponent } from './interpector.component';

describe('InterpectorComponent', () => {
  let component: InterpectorComponent;
  let fixture: ComponentFixture<InterpectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
