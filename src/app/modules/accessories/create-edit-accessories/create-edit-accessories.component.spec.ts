import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditAccessoriesComponent } from './create-edit-accessories.component';

describe('CreateEditAccessoriesComponent', () => {
  let component: CreateEditAccessoriesComponent;
  let fixture: ComponentFixture<CreateEditAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
