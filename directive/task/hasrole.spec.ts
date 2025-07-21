import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hasrole } from './hasrole';

describe('Hasrole', () => {
  let component: Hasrole;
  let fixture: ComponentFixture<Hasrole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hasrole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hasrole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
