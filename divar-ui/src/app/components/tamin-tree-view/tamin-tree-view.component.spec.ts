import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminTreeViewComponent } from './tamin-tree-view.component';

describe('TaminTreeViewComponent', () => {
  let component: TaminTreeViewComponent;
  let fixture: ComponentFixture<TaminTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaminTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaminTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
