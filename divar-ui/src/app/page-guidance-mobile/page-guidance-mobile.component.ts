import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {PageGuidanceMobileItemComponent} from '../page-guidance-mobile-item/page-guidance-mobile-item.component';

@Component({
  selector: 'app-page-guidance-mobile',
  templateUrl: './page-guidance-mobile.component.html',
  styleUrls: ['./page-guidance-mobile.component.scss']
})
export class PageGuidanceMobileComponent implements OnInit {

  @ContentChildren(PageGuidanceMobileItemComponent)
  items: QueryList<PageGuidanceMobileItemComponent>;
  @Input() title: string;


  constructor() { }

  ngOnInit(): void {
  }

}
