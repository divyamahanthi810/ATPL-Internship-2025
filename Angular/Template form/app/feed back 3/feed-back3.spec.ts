import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBack3 } from './feed-back3';

describe('FeedBack3', () => {
  let component: FeedBack3;
  let fixture: ComponentFixture<FeedBack3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedBack3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedBack3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
