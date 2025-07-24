import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage2 } from './login-page2';

describe('LoginPage2', () => {
  let component: LoginPage2;
  let fixture: ComponentFixture<LoginPage2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPage2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPage2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
