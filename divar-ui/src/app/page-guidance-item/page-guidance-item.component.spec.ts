import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGuidanceItemComponent } from './page-guidance-item.component';

describe('PageGuidanceItemComponent', () => {
  let component: PageGuidanceItemComponent;
  let fixture: ComponentFixture<PageGuidanceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGuidanceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGuidanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
