import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditAccountsComponent } from './create-edit-accounts.component';

describe('CreateEditAccountsComponent', () => {
  let component: CreateEditAccountsComponent;
  let fixture: ComponentFixture<CreateEditAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
