import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGuidanceMobileItemComponent } from './page-guidance-mobile-item.component';

describe('PageGuidanceMobileItemComponent', () => {
  let component: PageGuidanceMobileItemComponent;
  let fixture: ComponentFixture<PageGuidanceMobileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGuidanceMobileItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGuidanceMobileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
