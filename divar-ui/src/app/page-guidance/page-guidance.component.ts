import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {PageGuidanceItemComponent} from '../page-guidance-item/page-guidance-item.component';

@Component({
  selector: 'app-page-guidance',
  templateUrl: './page-guidance.component.html',
  styleUrls: ['./page-guidance.component.scss']
})
export class PageGuidanceComponent implements OnInit {

  @ContentChildren(PageGuidanceItemComponent)
  items: QueryList<PageGuidanceItemComponent>;
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
