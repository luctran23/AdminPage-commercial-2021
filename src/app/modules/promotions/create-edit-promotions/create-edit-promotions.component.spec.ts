import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditPromotionsComponent } from './create-edit-promotions.component';

describe('CreateEditPromotionsComponent', () => {
  let component: CreateEditPromotionsComponent;
  let fixture: ComponentFixture<CreateEditPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
