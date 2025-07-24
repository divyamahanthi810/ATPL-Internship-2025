import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dialog4 } from './dialog4';
import { DialogOverviewExample } from './dialog4';

describe('Dialog4', () => {
  let component: Dialog4;
  let fixture: ComponentFixture<Dialog4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dialog4,DialogOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialog4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
