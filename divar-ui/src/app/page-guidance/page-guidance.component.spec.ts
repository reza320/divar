import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGuidanceComponent } from './page-guidance.component';

describe('PageGuidanceComponent', () => {
  let component: PageGuidanceComponent;
  let fixture: ComponentFixture<PageGuidanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGuidanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
