import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditBrandsComponent } from './create-edit-brands.component';

describe('CreateEditBrandsComponent', () => {
  let component: CreateEditBrandsComponent;
  let fixture: ComponentFixture<CreateEditBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
