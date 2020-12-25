import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieGComponent } from './categorie-g.component';

describe('CategorieGComponent', () => {
  let component: CategorieGComponent;
  let fixture: ComponentFixture<CategorieGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
