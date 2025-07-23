import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicReactform1 } from './basic-reactform1';

describe('BasicReactform1', () => {
  let component: BasicReactform1;
  let fixture: ComponentFixture<BasicReactform1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicReactform1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicReactform1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
