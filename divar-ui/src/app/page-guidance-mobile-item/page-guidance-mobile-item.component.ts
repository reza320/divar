import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-page-guidance-mobile-item',
  templateUrl: './page-guidance-mobile-item.component.html',
  styleUrls: ['./page-guidance-mobile-item.component.scss']
})
export class PageGuidanceMobileItemComponent implements OnInit {
  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
