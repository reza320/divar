import {Component, Injector, Input, OnInit} from '@angular/core';
import {TaminPageBaseComponent} from 'tamin-framework';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent extends TaminPageBaseComponent {

  breakPoints: Array<any> = [Breakpoints.Small, Breakpoints.Handset];
  renderMode: 'desktop' | 'mobile' = 'desktop';
  @Input() title: string;

  constructor(injector: Injector, private breakpointObserver: BreakpointObserver) {
    super(injector);
  }

  protected initializePage() {
    this.breakpointObserver
      .observe(this.breakPoints)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {

          if (this.renderMode !== 'mobile') {
            this.renderMode = 'mobile';
          }
        } else {
          if (this.renderMode !== 'desktop') {
            this.renderMode = 'desktop';
          }
        }
      });
  }
}
