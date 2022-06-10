import {Component} from '@angular/core';
import {TaminPageBaseComponent} from 'tamin-framework';
import {Urls} from '../../../settings/urls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends TaminPageBaseComponent {
  title = 'tamin-me';
  menuUrl = Urls.Menu;
  protected initializePage() {
    // this.securityService.loginCallbackCheck();
    // if (this.securityService.hasToken()) {
    //   const redirectUrl = this.securityService.getRedirectUrl();
    //   if (redirectUrl && this.securityService.checkToken()) {
    //     this.securityService.removeRedirectUrl();
    //     this.redirectTo(redirectUrl);
    //   }
    // } else {
    //   this.securityService.redirectToLogin();
    // }
  }

  protected loadPageData() {

  }
}
