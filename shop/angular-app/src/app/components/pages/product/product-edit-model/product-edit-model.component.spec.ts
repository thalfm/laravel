import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditModelComponent } from './product-edit-model.component';

describe('ProductEditModelComponent', () => {
  let component: ProductEditModelComponent;
  let fixture: ComponentFixture<ProductEditModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
