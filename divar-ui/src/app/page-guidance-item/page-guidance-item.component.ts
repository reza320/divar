import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-page-guidance-item',
  templateUrl: './page-guidance-item.component.html',
  styleUrls: ['./page-guidance-item.component.scss']
})
export class PageGuidanceItemComponent implements OnInit {
  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
