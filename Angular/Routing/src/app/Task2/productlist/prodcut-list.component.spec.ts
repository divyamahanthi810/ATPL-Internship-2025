import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutListComponent } from './prodcut-list.component';

describe('ProdcutListComponent', () => {
  let component: ProdcutListComponent;
  let fixture: ComponentFixture<ProdcutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdcutListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
