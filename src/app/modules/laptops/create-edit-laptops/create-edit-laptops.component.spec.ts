import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditLaptopsComponent } from './create-edit-laptops.component';

describe('CreateEditLaptopsComponent', () => {
  let component: CreateEditLaptopsComponent;
  let fixture: ComponentFixture<CreateEditLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
