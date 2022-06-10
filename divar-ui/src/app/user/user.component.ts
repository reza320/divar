import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {TaminPageBaseComponent} from 'tamin-framework';
import {createPopper} from '@popperjs/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends TaminPageBaseComponent {
  userName: string;
  @Input() color;
  @ViewChild('userContainer') userContainer: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  private popper: any;
  private showPopperState = false;

  get showPopper(): boolean {
    return this.showPopperState;
  }

  set showPopper(val: boolean) {
    this.showPopperState = val;
    this.menu.nativeElement.style.visibility = val ? 'visible' : 'hidden';
  }

  protected initializePage() {
    if (this.securityService.hasToken()) {
      this.securityService
        .getCurrentUser()
        .then(value => {
          // this.color = this.menu.nativeElement.style.visibility = 'hidden';
          this.userName = value.displayName;
          setTimeout(() => {
            this.menu.nativeElement.style.visibility = 'hidden';
            this.popper = createPopper(this.userContainer.nativeElement, this.menu.nativeElement, {
              strategy: 'fixed',
              placement: 'bottom',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 10],
                  },
                },
              ],
            });
          });

        })
        .catch(reason => {
        })
        .finally(() => {
        });
    }
  }

  protected loadPageData() {
    // setTimeout(() => {
    //   this.menu.nativeElement.style.visibility = 'hidden';
    // }, 1000);
  }

  togglePopup() {
    setTimeout(() => {
      this.showPopper = !this.showPopper;
    }, 200);
  }

  onProfileClick(event: any) {
    this.redirectTo('profile');
  }

  onLogoutClick(event: any) {
    this.securityService.redirectToLogout();
  }
}
