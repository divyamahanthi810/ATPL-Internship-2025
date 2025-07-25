import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogcontent } from './dialogcontent';

describe('Dialogcontent', () => {
  let component: Dialogcontent;
  let fixture: ComponentFixture<Dialogcontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialogcontent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialogcontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
