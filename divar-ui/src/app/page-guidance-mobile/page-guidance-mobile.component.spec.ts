import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGuidanceMobileComponent } from './page-guidance-mobile.component';

describe('PageGuidanceMobileComponent', () => {
  let component: PageGuidanceMobileComponent;
  let fixture: ComponentFixture<PageGuidanceMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGuidanceMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGuidanceMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
