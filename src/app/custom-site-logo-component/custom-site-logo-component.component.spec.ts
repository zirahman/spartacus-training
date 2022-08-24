import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSiteLogoComponentComponent } from './custom-site-logo-component.component';

describe('CustomSiteLogoComponentComponent', () => {
  let component: CustomSiteLogoComponentComponent;
  let fixture: ComponentFixture<CustomSiteLogoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSiteLogoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSiteLogoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
