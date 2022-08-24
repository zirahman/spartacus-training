import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEditProfileComponent } from './custom-edit-profile.component';

describe('CustomEditProfileComponent', () => {
  let component: CustomEditProfileComponent;
  let fixture: ComponentFixture<CustomEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
