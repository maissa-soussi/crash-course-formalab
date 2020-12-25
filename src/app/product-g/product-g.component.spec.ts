import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGComponent } from './product-g.component';

describe('ProductGComponent', () => {
  let component: ProductGComponent;
  let fixture: ComponentFixture<ProductGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
