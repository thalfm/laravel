import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditModelComponent } from './category-edit-model.component';

describe('CategoryEditModelComponent', () => {
  let component: CategoryEditModelComponent;
  let fixture: ComponentFixture<CategoryEditModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
